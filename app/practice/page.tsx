'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { QUESTIONS, TOPICS_BY_ID } from '@/lib/seed';
import { loadReview, saveReview } from '@/lib/storage';
import { filterByQuery, pickWeighted } from '@/lib/weighting';
import { QuestionCardView } from '@/components/QuestionCard';
import { Fmt } from '@/lib/chemFmt';
import type { Question, ReviewState, UnitId } from '@/lib/types';

const Inner = () => {
  const params = useSearchParams();
  const topicId = params.get('topic');
  const unitParam = params.get('unit');
  const unitId = unitParam ? (Number(unitParam) as UnitId) : null;

  const [state, setState] = useState<ReviewState | null>(null);
  const [current, setCurrent] = useState<Question | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  useEffect(() => {
    setState(loadReview());
  }, []);

  const pool = useMemo(() => filterByQuery(QUESTIONS, TOPICS_BY_ID, topicId, unitId), [topicId, unitId]);

  const pickNext = (excludeId: string | null, seenSet: Set<string>): Question | null => {
    if (pool.length === 0) return null;
    const remaining = pool.filter((q) => !seenSet.has(q.id) && q.id !== excludeId);
    const candidates = remaining.length > 0 ? remaining : pool.filter((q) => q.id !== excludeId);
    if (candidates.length === 0) return null;
    if (topicId || unitId) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return pickWeighted(candidates, TOPICS_BY_ID) ?? candidates[0];
  };

  useEffect(() => {
    if (!state) return;
    if (current) return;
    setCurrent(pickNext(null, seen));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, pool]);

  const onAnswered = (correct: boolean) => {
    if (!state || !current) return;
    const attempt = { questionId: current.id, correct, at: Date.now() };
    const next: ReviewState = { ...state, attempts: [...state.attempts, attempt] };
    setState(next);
    saveReview(next);
    setStats((s) => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
  };

  const onNext = () => {
    if (!current) return;
    const seenNext = new Set(seen);
    seenNext.add(current.id);
    setSeen(seenNext);
    setCurrent(pickNext(current.id, seenNext));
  };

  if (state === null) {
    return <div className="text-zinc-500">Loading…</div>;
  }

  if (pool.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-zinc-400">No questions for this filter.</div>
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
        <div className="text-zinc-500 text-sm mt-1">
          Session score: <span className="font-mono">{stats.correct}/{stats.total}</span>
        </div>
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
        <span><Fmt>{filterLabel ?? ''}</Fmt></span>
        <span>
          Session: <span className="font-mono text-zinc-300">{stats.correct}/{stats.total}</span>
        </span>
      </div>
      <QuestionCardView
        question={current}
        topicName={topic?.name ?? '—'}
        unitId={topic?.unitId ?? 0}
        onAnswered={onAnswered}
        onNext={onNext}
      />
      <div className="text-center">
        <Link href={`/topic/${current.topicId}/`} className="text-xs text-zinc-500 underline hover:text-zinc-300">
          View this topic →
        </Link>
      </div>
    </div>
  );
};

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="text-zinc-500">Loading…</div>}>
      <Inner />
    </Suspense>
  );
}
