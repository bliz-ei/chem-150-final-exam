import React from 'react';

// Splits on _x / _{xx} / ^x / ^{xx}, where x can include +/- prefix for superscripts.
// Unicode subscripts/superscripts (₂, ⁻¹, etc.) pass through unchanged.
const TOKEN_RE = /(\^\{[^}]+\}|\^[+\-]?[A-Za-z0-9]+|_\{[^}]+\}|_[A-Za-z0-9]+)/g;

const renderToken = (token: string, key: number): React.ReactNode => {
  if (token.startsWith('_{')) return <sub key={key}>{token.slice(2, -1)}</sub>;
  if (token.startsWith('_')) return <sub key={key}>{token.slice(1)}</sub>;
  if (token.startsWith('^{')) return <sup key={key}>{token.slice(2, -1)}</sup>;
  if (token.startsWith('^')) return <sup key={key}>{token.slice(1)}</sup>;
  return null;
};

export const Fmt = ({ children }: { children: string | null | undefined }) => {
  if (!children) return null;
  const parts = children.split(TOKEN_RE);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const node = renderToken(part, i);
        if (node) return node;
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};

// For places that need a plain-text version (e.g., HTML title, aria-label).
export const fmtPlain = (s: string): string =>
  s
    .replace(/_\{([^}]+)\}/g, '$1')
    .replace(/_([A-Za-z0-9]+)/g, '$1')
    .replace(/\^\{([^}]+)\}/g, '$1')
    .replace(/\^([+\-]?[A-Za-z0-9]+)/g, '$1');
