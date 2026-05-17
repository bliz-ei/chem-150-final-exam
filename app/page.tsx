'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  UNITS,
  TOPICS,
  cardsByTopic,
  questionsByTopic,
  topicsByUnit,
} from '@/lib/seed';
import { loadReview } from '@/lib/storage';
import { dueCount } from '@/lib/leitner';
import { TopicCardLink } from '@/components/TopicCardLink';
import { Countdown } from '@/components/Countdown';
import type { ReviewState } from '@/lib/types';

export default function Dashboard() {
  const [state, setState] = useState<ReviewState | null>(null);

  useEffect(() => {
    setState(loadReview());
  }, []);

  const totalCards = TOPICS.reduce((acc, t) => acc + cardsByTopic(t.id).length, 0);
  const totalQuestions = TOPICS.reduce((acc, t) => acc + questionsByTopic(t.id).length, 0);

  const totalDue = useMemo(() => {
    if (!state) return totalCards;
    const allIds = TOPICS.flatMap((t) => cardsByTopic(t.id).map((c) => c.id));
    return dueCount(state, allIds);
  }, [state, totalCards]);

  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-100">Final exam review</h1>
            <p className="text-zinc-400 text-sm mt-1">
              Mon 2026-05-18 · 1:30–4:00 PM · Unit 4 weighted 60%, Units 1–3 share 40%.
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-zinc-500">Time remaining</div>
            <div className="text-lg"><Countdown /></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat label="Topics" value={TOPICS.length} />
          <Stat label="Flashcards" value={totalCards} />
          <Stat label="Practice Qs" value={totalQuestions} />
          <Stat label="Cards due" value={totalDue} highlight />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/cards/"
            className="px-4 py-2 rounded border border-zinc-400 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium"
          >
            Study all cards (60/40 weighted)
          </Link>
          <Link
            href="/cards/?unit=4"
            className="px-4 py-2 rounded border border-zinc-700 text-zinc-200 hover:bg-zinc-900 text-sm"
          >
            Unit 4 cards only
          </Link>
          <Link
            href="/practice/"
            className="px-4 py-2 rounded border border-zinc-700 text-zinc-200 hover:bg-zinc-900 text-sm"
          >
            Practice questions
          </Link>
        </div>
      </section>

      {UNITS.map((unit) => {
        const topics = topicsByUnit(unit.id);
        return (
          <section key={unit.id}>
            <div className="flex items-end justify-between mb-3">
              <h2 className="text-lg font-medium text-zinc-100">
                Unit {unit.id}: {unit.name}
              </h2>
              <div className="text-xs text-zinc-500">
                ~{Math.round(unit.examWeight * 100)}% of exam
                {' · '}
                <Link href={`/cards/?unit=${unit.id}`} className="underline hover:text-zinc-300">
                  study unit
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {topics.map((t) => {
                const tc = cardsByTopic(t.id);
                const tq = questionsByTopic(t.id);
                const due = state ? dueCount(state, tc.map((c) => c.id)) : tc.length;
                return (
                  <TopicCardLink
                    key={t.id}
                    topic={t}
                    dueCount={due}
                    totalCards={tc.length}
                    totalQuestions={tq.length}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      <section className="text-xs text-zinc-500 border-t border-zinc-900 pt-4">
        Content is AI-generated from the unit topic list. Treat as a review surface, not authoritative — cross-reference against your annotated slide decks at <code className="text-zinc-400">chem files/</code> when anything looks off.
      </section>
    </div>
  );
}

const Stat = ({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) => (
  <div className={`rounded-lg border p-3 ${highlight ? 'border-zinc-500 bg-zinc-900' : 'border-zinc-800 bg-zinc-950'}`}>
    <div className="text-xs text-zinc-500">{label}</div>
    <div className="text-2xl font-mono text-zinc-100 mt-1">{value}</div>
  </div>
);
