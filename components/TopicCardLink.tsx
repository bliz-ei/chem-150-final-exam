import Link from 'next/link';
import type { Topic } from '@/lib/types';

type Props = {
  topic: Topic;
  dueCount: number;
  totalCards: number;
  totalQuestions: number;
};

export const TopicCardLink = ({ topic, dueCount, totalCards, totalQuestions }: Props) => {
  return (
    <Link
      href={`/topic/${topic.id}/`}
      className="block rounded-lg border border-zinc-800 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900 transition-colors p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-medium text-zinc-100">{topic.name}</div>
          <div className="text-xs text-zinc-500 mt-0.5 line-clamp-2">{topic.description}</div>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-xs text-zinc-400">
            <span className="font-mono">{totalCards}</span> cards
          </div>
          <div className="text-xs text-zinc-500">
            <span className="font-mono">{totalQuestions}</span> Qs
          </div>
          {dueCount > 0 && (
            <div className="mt-1 inline-block px-1.5 py-0.5 text-[10px] rounded bg-zinc-800 text-zinc-200 border border-zinc-700">
              {dueCount} due
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
