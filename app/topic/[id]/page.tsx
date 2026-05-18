import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  TOPICS,
  TOPICS_BY_ID,
  UNITS_BY_ID,
  cardsByTopic,
  questionsByTopic,
} from '@/lib/seed';
import { Fmt } from '@/lib/chemFmt';

export function generateStaticParams() {
  return TOPICS.map((t) => ({ id: t.id }));
}

export default function TopicPage({ params }: { params: { id: string } }) {
  const topic = TOPICS_BY_ID[params.id];
  if (!topic) {
    notFound();
  }
  const unit = UNITS_BY_ID[topic.unitId];
  const cards = cardsByTopic(topic.id);
  const questions = questionsByTopic(topic.id);

  return (
    <div className="space-y-8">
      <header>
        <div className="text-xs text-zinc-500">
          Unit {unit.id} · {unit.name} · ~{Math.round(unit.examWeight * 100)}% of exam
        </div>
        <h1 className="text-2xl font-semibold text-zinc-100 mt-1"><Fmt>{topic.name}</Fmt></h1>
        <p className="text-zinc-300 mt-2 whitespace-pre-wrap"><Fmt>{topic.description}</Fmt></p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={`/cards/?topic=${topic.id}`}
            className="px-3 py-1.5 text-sm rounded border border-zinc-400 bg-zinc-800 hover:bg-zinc-700 text-zinc-100"
          >
            Study these cards
          </Link>
          <Link
            href={`/practice/?topic=${topic.id}`}
            className="px-3 py-1.5 text-sm rounded border border-zinc-700 text-zinc-200 hover:bg-zinc-900"
          >
            Practice these questions
          </Link>
          <Link
            href="/"
            className="px-3 py-1.5 text-sm rounded border border-zinc-800 text-zinc-400 hover:bg-zinc-900"
          >
            ← Dashboard
          </Link>
        </div>
        <div className="mt-2 text-xs text-zinc-500">
          Source: see Unit {unit.id} slide decks in <code className="text-zinc-400">chem files/</code>.
        </div>
      </header>

      <section>
        <h2 className="text-lg font-medium text-zinc-100 mb-3">
          Flashcards ({cards.length})
        </h2>
        <ul className="space-y-1.5">
          {cards.map((c) => (
            <li
              key={c.id}
              className="rounded border border-zinc-800 bg-zinc-950 p-3 text-sm"
            >
              <div className="text-zinc-100"><Fmt>{c.front}</Fmt></div>
              <div className="text-zinc-400 mt-1 text-xs whitespace-pre-wrap"><Fmt>{c.back}</Fmt></div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium text-zinc-100 mb-3">
          Practice questions ({questions.length})
        </h2>
        <ul className="space-y-1.5">
          {questions.map((q) => (
            <li
              key={q.id}
              className="rounded border border-zinc-800 bg-zinc-950 p-3 text-sm"
            >
              <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">
                {q.kind === 'mcq' ? 'Multiple choice' : 'Short answer'}
              </div>
              <div className="text-zinc-100"><Fmt>{q.prompt}</Fmt></div>
              {q.kind === 'mcq' && q.choices && (
                <ul className="mt-1.5 space-y-0.5">
                  {q.choices.map((ch) => (
                    <li
                      key={ch}
                      className={`text-xs ${ch === q.answer ? 'text-emerald-300' : 'text-zinc-400'}`}
                    >
                      {ch === q.answer ? '✓ ' : '· '}
                      <Fmt>{ch}</Fmt>
                    </li>
                  ))}
                </ul>
              )}
              {q.kind === 'short' && (
                <div className="text-xs text-emerald-300 mt-1">Answer: <Fmt>{q.answer}</Fmt></div>
              )}
              <div className="text-xs text-zinc-400 mt-1 whitespace-pre-wrap"><Fmt>{q.explanation}</Fmt></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
