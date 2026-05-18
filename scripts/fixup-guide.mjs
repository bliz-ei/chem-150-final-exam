// One-shot rewrite of app/guide/page.tsx to:
//   1. Replace `H_2`, `O_4`, etc. in compound formulas with Unicode subscript digits.
//   2. Replace charge patterns like `^+`, `^-`, `^{2+}`, `^{2-}`, `^{3+}` with Unicode superscripts.
//   3. Wrap any JSX text line still containing `_{...}` or `^{...}` (e.g. E_{a,fwd}, k_{-1})
//      in a template literal so JSX doesn't parse the braces as an embedded expression.
//
// Letter subscripts like K_a, T_b stay as-is — the <Fmt> renderer handles them and JSX
// doesn't choke on them (the {} is what JSX parses, not the underscore).

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = resolve(__dirname, '..', 'app', 'guide', 'page.tsx');

const SUB = { '0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉' };
const SUP = { '0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','+':'⁺','-':'⁻','−':'⁻' };

let content = readFileSync(FILE, 'utf8');
let counts = {};
const bump = (k) => { counts[k] = (counts[k] ?? 0) + 1; };

// Step 1: compound subscripts. For "X_d" where X is one or two letters (chemical-element-like)
// and d is a single digit, replace with X + Unicode subscript digit.
// We use a positive lookahead so we don't eat into a longer identifier accidentally.
// Match `X_d` (no lookahead): in chemical formulas, the next char after the digit is
// often the next element letter (e.g. C_2H_6 → C₂H₆), so we want both subscripts converted.
content = content.replace(/([A-Z][a-z]?)_(\d)/g, (_, atom, digit) => {
  bump('compound _digit');
  return atom + SUB[digit];
});

// Also handle a digit-then-subscript-then-letter pattern that came up after step 1, e.g.
// "Na_2SO_4" already handled. But "H_3O" -> we want H₃O — handled above because "H_3" matches.

// Step 2a: superscript braced charges: ^{2+}, ^{2-}, ^{3+}, ^{2−}
content = content.replace(/\^\{(\d)([+\-−])\}/g, (_, d, s) => {
  bump('^{N±}');
  return SUP[d] + SUP[s];
});

// Step 2b: single-char superscripts: ^+, ^-, ^−
content = content.replace(/\^([+\-−])(?![A-Za-z0-9])/g, (_, s) => {
  bump('^±');
  return SUP[s];
});

// Step 3: any remaining "_{...}" or "^{...}" in JSX text breaks the parser. Find lines
// containing these tokens INSIDE JSX text (i.e. not already inside a backtick template
// or a single-quoted string) and wrap that line's text content in a template literal.
//
// Simple approach: for every line that still contains "_{" or "^{", if it doesn't already
// use a template literal `{`...`}`, wrap the JSX text node.

// Easier: just convert specific known-bad lines individually using regex on the line text.
// We'll do a targeted pass: any <P>, <LI>, <H3>, <EqBlock>, <Eq>, or <strong> with bare
// text that contains _{ or ^{ becomes a template-literal child.
//
// Pattern: <Tag>(text without {)<text>(text with _{ or ^{)(text)</Tag>
//   -> <Tag>{`text...text`}</Tag>
// To stay safe we restrict to lines that look like a single tag-pair on one line.

const SAFE_TAGS = ['P', 'LI', 'EqBlock', 'Eq', 'H3', 'strong'];
const tagAlt = SAFE_TAGS.join('|');
const lineRe = new RegExp(`^(\\s*<(?:${tagAlt})(?:\\s[^>]*)?>)([^<{}]*(?:[_^]\\{[^}]+\\}[^<{}]*)+)(</(?:${tagAlt})>\\s*)$`, 'gm');

content = content.replace(lineRe, (m, open, body, close) => {
  // Skip already-template-literal lines.
  if (body.startsWith('{') && body.endsWith('}')) return m;
  // Use template literal so braces in body aren't JSX-parsed.
  bump('wrap line with brace text');
  return `${open}{\`${body}\`}${close}`;
});

writeFileSync(FILE, content);
console.log('Fixups applied:');
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
