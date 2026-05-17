'use client';

import { useEffect, useState } from 'react';
import type { Flashcard as FlashcardType, Rating } from '@/lib/types';

type Props = {
  card: FlashcardType;
  topicName: string;
  unitId: number;
  onRate: (r: Rating) => void;
  onSkip: () => void;
};

export const FlashcardView = ({ card, topicName, unitId, onRate, onSkip }: Props) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [card.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (t && t.isContentEditable)) return;
      if (e.key === ' ') {
        e.preventDefault();
        setFlipped((v) => !v);
      } else if (flipped && (e.key === '1' || e.key === '2' || e.key === '3')) {
        e.preventDefault();
        if (e.key === '1') onRate('again');
        if (e.key === '2') onRate('hard');
        if (e.key === '3') onRate('good');
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        onSkip();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipped, onRate, onSkip]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
        <span>Unit {unitId} · {topicName}</span>
        <span>{flipped ? 'Answer' : 'Question'}</span>
      </div>
      <button
        onClick={() => setFlipped((v) => !v)}
        className="w-full text-left rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-900/80 transition-colors p-8 min-h-[260px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-500"
        aria-label="Flip card"
      >
        <div className="text-zinc-100 text-lg leading-relaxed whitespace-pre-wrap">
          {flipped ? card.back : card.front}
        </div>
      </button>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-zinc-500">
          <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">space</kbd> flip &nbsp;
          {flipped && (
            <>
              <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">1</kbd> again &nbsp;
              <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">2</kbd> hard &nbsp;
              <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">3</kbd> good &nbsp;
            </>
          )}
          <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">n</kbd> skip
        </div>
        {flipped && (
          <div className="flex gap-2">
            <button
              onClick={() => onRate('again')}
              className="px-3 py-1.5 text-sm rounded border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
            >
              Again
            </button>
            <button
              onClick={() => onRate('hard')}
              className="px-3 py-1.5 text-sm rounded border border-zinc-600 text-zinc-100 hover:bg-zinc-800"
            >
              Hard
            </button>
            <button
              onClick={() => onRate('good')}
              className="px-3 py-1.5 text-sm rounded border border-zinc-400 text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
            >
              Good
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
