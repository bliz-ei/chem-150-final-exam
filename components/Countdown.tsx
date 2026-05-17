'use client';

import { useEffect, useState } from 'react';

// Final exam: Mon 2026-05-18, 13:30 local time
const EXAM_AT = new Date(2026, 4, 18, 13, 30, 0).getTime();

const fmt = (ms: number): string => {
  if (ms <= 0) return 'EXAM TIME';
  const sec = Math.floor(ms / 1000);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
};

export const Countdown = () => {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) {
    return <span className="font-mono text-zinc-400">—</span>;
  }
  const remaining = EXAM_AT - now;
  return (
    <span className="font-mono text-zinc-200" suppressHydrationWarning>
      {fmt(remaining)}
    </span>
  );
};
