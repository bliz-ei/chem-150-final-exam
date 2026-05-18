// One-shot rewrite: convert bare letter constants (Ka, Kb, Kw, Kc, Kp, pKa, pKb, Ea)
// into underscore notation (K_a, K_b, ...) so the <Fmt> renderer shows real subscripts.
// Skips topic ID literals (strings matching /^u\d-/) so URLs and lookups are unaffected.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(__dirname, '..', 'lib', 'seed.ts');

const replacements = [
  // Order: longer patterns first so pKa is rewritten before bare Ka.
  [/\bpKa\b/g, 'pK_a'],
  [/\bpKb\b/g, 'pK_b'],
  [/\bKa\b/g, 'K_a'],
  [/\bKb\b/g, 'K_b'],
  [/\bKw\b/g, 'K_w'],
  [/\bKc\b/g, 'K_c'],
  [/\bKp\b/g, 'K_p'],
  [/\bEa\b/g, 'E_a'],
];

const TOPIC_ID_RE = /^u\d-[\w-]+$/;

const original = readFileSync(SEED, 'utf8');

let counts = Object.fromEntries(replacements.map(([re]) => [re.source, 0]));

const rewritten = original.replace(/'((?:[^'\\]|\\.)*)'/g, (match, body) => {
  if (TOPIC_ID_RE.test(body)) return match;
  let b = body;
  for (const [re, sub] of replacements) {
    const before = b;
    b = b.replace(re, sub);
    if (b !== before) {
      counts[re.source] += (before.match(re) ?? []).length;
    }
  }
  return "'" + b + "'";
});

writeFileSync(SEED, rewritten);

console.log('Replacements applied:');
for (const [pattern, count] of Object.entries(counts)) {
  if (count > 0) console.log(`  ${pattern}: ${count}`);
}
