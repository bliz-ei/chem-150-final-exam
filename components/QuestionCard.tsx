'use client';

import { useEffect, useState } from 'react';
import type { Question } from '@/lib/types';

type Props = {
  question: Question;
  topicName: string;
  unitId: number;
  onAnswered: (correct: boolean) => void;
  onNext: () => void;
};

const normalize = (s: string): string =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[°·×]/g, '')
    .replace(/[−–]/g, '-');

const checkShort = (input: string, answer: string): boolean => {
  const a = normalize(input);
  const b = normalize(answer);
  if (a.length === 0) return false;
  if (a === b) return true;
  if (a.includes(b) || b.includes(a)) return true;
  return false;
};

export const QuestionCardView = ({ question, topicName, unitId, onAnswered, onNext }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setSelected(null);
    setInput('');
    setSubmitted(false);
    setCorrect(false);
  }, [question.id]);

  const submit = () => {
    if (submitted) return;
    let isCorrect = false;
    if (question.kind === 'mcq') {
      if (selected === null) return;
      isCorrect = selected === question.answer;
    } else {
      isCorrect = checkShort(input, question.answer);
    }
    setSubmitted(true);
    setCorrect(isCorrect);
    onAnswered(isCorrect);
  };

  const next = () => {
    onNext();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (t && t.isContentEditable)) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (!submitted) submit();
          else next();
        }
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!submitted) submit();
        else next();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, selected, input, question]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
        <span>Unit {unitId} · {topicName}</span>
        <span className="uppercase tracking-wider">{question.kind === 'mcq' ? 'Multiple choice' : 'Short answer'}</span>
      </div>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="text-zinc-100 text-lg leading-relaxed whitespace-pre-wrap mb-5">
          {question.prompt}
        </div>
        {question.kind === 'mcq' && question.choices && (
          <div className="space-y-2">
            {question.choices.map((choice) => {
              const isSelected = selected === choice;
              const isCorrectChoice = submitted && choice === question.answer;
              const isWrongPick = submitted && isSelected && !isCorrectChoice;
              return (
                <button
                  key={choice}
                  disabled={submitted}
                  onClick={() => setSelected(choice)}
                  className={`w-full text-left px-3 py-2 rounded border transition-colors text-sm ${
                    isCorrectChoice
                      ? 'border-emerald-700 bg-emerald-950/40 text-emerald-100'
                      : isWrongPick
                        ? 'border-red-800 bg-red-950/40 text-red-100'
                        : isSelected
                          ? 'border-zinc-400 bg-zinc-800 text-zinc-100'
                          : 'border-zinc-800 bg-zinc-950 text-zinc-200 hover:bg-zinc-900'
                  }`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        )}
        {question.kind === 'short' && (
          <input
            type="text"
            value={input}
            disabled={submitted}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer"
            className="w-full px-3 py-2 rounded border border-zinc-800 bg-zinc-950 text-zinc-100 focus:outline-none focus:border-zinc-500"
          />
        )}
        {submitted && (
          <div className="mt-4 rounded border border-zinc-800 bg-zinc-950 p-3 text-sm">
            <div className={correct ? 'text-emerald-300 font-medium' : 'text-red-300 font-medium'}>
              {correct ? 'Correct' : 'Not quite'}
            </div>
            {!correct && (
              <div className="text-zinc-400 mt-1">
                Answer: <span className="text-zinc-200">{question.answer}</span>
              </div>
            )}
            <div className="text-zinc-300 mt-2 whitespace-pre-wrap">{question.explanation}</div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-zinc-500">
          <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">Enter</kbd> {submitted ? 'next' : 'submit'}
        </div>
        {!submitted ? (
          <button
            onClick={submit}
            disabled={question.kind === 'mcq' ? selected === null : input.length === 0}
            className="px-3 py-1.5 text-sm rounded border border-zinc-400 text-zinc-100 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={next}
            className="px-3 py-1.5 text-sm rounded border border-zinc-400 text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
