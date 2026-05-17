'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FLASHCARDS, TOPICS_BY_ID } from '@/lib/seed';
import { loadReview, saveReview } from '@/lib/storage';
import { applyRating, isDue } from '@/lib/leitner';
import { filterByQuery, pickWeighted, shuffled } from '@/lib/weighting';
import { FlashcardView } from '@/components/Flashcard';
import type { Flashcard, Rating, ReviewState, UnitId } from '@/lib/types';

const Inner = () => {
  const params = useSearchParams();
  const topicId = params.get('topic');
  const unitParam = params.get('unit');
  const unitId = unitParam ? (Number(unitParam) as UnitId) : null;

  const [state, setState] = useState<ReviewState | null>(null);
  const [current, setCurrent] = useState<Flashcard | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [reviewedThisSession, setReviewedThisSession] = useState(0);

  useEffect(() => {
    setState(loadReview());
  }, []);

  const pool = useMemo(() => filterByQuery(FLASHCARDS, TOPICS_BY_ID, topicId, unitId), [topicId, unitId]);

  // Pick next card: prefer due, weighted by unit if no filter
  const pickNext = (
    s: ReviewState,
    excludeId: string | null,
    seenSet: Set<string>,
  ): Flashcard | null => {
    if (pool.length === 0) return null;
    const due = pool.filter((c) => isDue(s.cards[c.id]) && c.id !== excludeId);
    const unseen = due.filter((c) => !seenSet.has(c.id));
    const candidates = unseen.length > 0 ? unseen : due;
    if (candidates.length === 0) {
      // None due — fall back to any card (study session inside 24h means everything is "due" anyway)
      const fallback = pool.filter((c) => c.id !== excludeId);
      if (fallback.length === 0) return null;
      if (topicId || unitId) {
        return fallback[Math.floor(Math.random() * fallback.length)];
      }
      return pickWeighted(fallback, TOPICS_BY_ID) ?? fallback[0];
    }
    if (topicId || unitId) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return pickWeighted(candidates, TOPICS_BY_ID) ?? candidates[0];
  };

  useEffect(() => {
    if (!state) return;
    if (current) return;
    const next = pickNext(state, null, seen);
    setCurrent(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, pool]);

  const onRate = (r: Rating) => {
    if (!state || !current) return;
    const prev = state.cards[current.id];
    const review = applyRating(prev, r);
    const next: ReviewState = {
      ...state,
      cards: { ...state.cards, [current.id]: review },
    };
    setState(next);
    saveReview(next);
    const seenNext = new Set(seen);
    seenNext.add(current.id);
    setSeen(seenNext);
    setReviewedThisSession((n) => n + 1);
    setCurrent(pickNext(next, current.id, seenNext));
  };

  const onSkip = () => {
    if (!state || !current) return;
    const seenNext = new Set(seen);
    seenNext.add(current.id);
    setSeen(seenNext);
    setCurrent(pickNext(state, current.id, seenNext));
  };

  if (state === null) {
    return <div className="text-zinc-500">Loading…</div>;
  }

  if (pool.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-zinc-400">No cards for this filter.</div>
        <Link href="/" className="inline-block mt-3 text-sm underline text-zinc-300">
          ← Back to dashboard
        </Link>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="text-center py-16">
        <div className="text-zinc-100 text-lg">All caught up.</div>
        <div className="text-zinc-500 text-sm mt-1">No more cards in this filter.</div>
        <Link href="/" className="inline-block mt-4 text-sm underline text-zinc-300">
          ← Back to dashboard
        </Link>
      </div>
    );
  }

  const topic = TOPICS_BY_ID[current.topicId];
  const filterLabel = topicId
    ? topic?.name
    : unitId
      ? `Unit ${unitId} only`
      : 'All units (60% Unit 4)';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>{filterLabel}</span>
        <span>Reviewed this session: <span className="font-mono text-zinc-300">{reviewedThisSession}</span></span>
      </div>
      <FlashcardView
        card={current}
        topicName={topic?.name ?? '—'}
        unitId={topic?.unitId ?? 0}
        onRate={onRate}
        onSkip={onSkip}
      />
      <div className="text-center">
        <Link href={`/topic/${current.topicId}/`} className="text-xs text-zinc-500 underline hover:text-zinc-300">
          View this topic →
        </Link>
      </div>
    </div>
  );
};

import { Suspense } from 'react';

export default function CardsPage() {
  return (
    <Suspense fallback={<div className="text-zinc-500">Loading…</div>}>
      <Inner />
    </Suspense>
  );
}
