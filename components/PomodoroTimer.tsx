'use client';

import { useEffect, useRef, useState } from 'react';
import type { PomodoroState } from '@/lib/types';
import { loadPomodoro, savePomodoro } from '@/lib/storage';

const WORK_MS = 25 * 60 * 1000;
const SHORT_BREAK_MS = 5 * 60 * 1000;
const LONG_BREAK_MS = 15 * 60 * 1000;

const breakDurationFor = (completedWork: number): number =>
  completedWork > 0 && completedWork % 4 === 0 ? LONG_BREAK_MS : SHORT_BREAK_MS;

const formatTime = (ms: number): string => {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const computeRemaining = (state: PomodoroState, now: number): number => {
  if (state.startedAt === null) return state.remainingMs;
  const elapsed = now - state.startedAt;
  return Math.max(0, state.remainingMs - elapsed);
};

const advancePhase = (state: PomodoroState): PomodoroState => {
  if (state.phase === 'work') {
    const newCompleted = state.completedWorkSessions + 1;
    return {
      ...state,
      phase: 'break',
      remainingMs: breakDurationFor(newCompleted),
      startedAt: null,
      completedWorkSessions: newCompleted,
    };
  }
  return {
    ...state,
    phase: 'work',
    remainingMs: WORK_MS,
    startedAt: null,
  };
};

export const PomodoroTimer = () => {
  const [state, setState] = useState<PomodoroState | null>(null);
  const [now, setNow] = useState<number>(() => Date.now());
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setState(loadPomodoro());
  }, []);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!state) return;
    if (state.startedAt === null) return;
    const remaining = computeRemaining(state, now);
    if (remaining > 0) return;
    const next = advancePhase(state);
    setState(next);
    savePomodoro(next);
    const msg = next.phase === 'break' ? 'Break time' : 'Back to studying';
    setToast(msg);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 4000);
  }, [now, state]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (t && t.isContentEditable)) return;
      if (!state) return;
      if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        toggle();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        reset();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const toggle = () => {
    if (!state) return;
    if (state.startedAt === null) {
      const next: PomodoroState = { ...state, startedAt: Date.now() };
      setState(next);
      savePomodoro(next);
    } else {
      const remaining = computeRemaining(state, Date.now());
      const next: PomodoroState = { ...state, remainingMs: remaining, startedAt: null };
      setState(next);
      savePomodoro(next);
    }
  };

  const reset = () => {
    if (!state) return;
    const fresh: PomodoroState = {
      ...state,
      remainingMs:
        state.phase === 'work' ? WORK_MS : breakDurationFor(state.completedWorkSessions),
      startedAt: null,
    };
    setState(fresh);
    savePomodoro(fresh);
  };

  const skip = () => {
    if (!state) return;
    const next = advancePhase(state);
    setState(next);
    savePomodoro(next);
  };

  if (!state) {
    return null;
  }

  const remaining = computeRemaining(state, now);
  const running = state.startedAt !== null;
  const phaseLabel = state.phase === 'work' ? 'Work' : 'Break';
  const cycle = state.completedWorkSessions % 4;

  return (
    <>
      {toast && (
        <div
          className="fixed bottom-44 right-4 z-50 px-3 py-2 rounded border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm shadow-lg"
          role="status"
        >
          {toast}
        </div>
      )}
      <div
        className="fixed bottom-4 right-4 z-40 w-60 rounded-lg border border-zinc-800 bg-zinc-900/95 backdrop-blur p-3 shadow-xl"
        aria-label="Pomodoro timer"
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`inline-block px-2 py-0.5 text-xs rounded-full border ${
              state.phase === 'work'
                ? 'border-zinc-400 text-zinc-100 bg-zinc-800'
                : 'border-zinc-600 text-zinc-300 bg-zinc-950'
            }`}
          >
            {phaseLabel}
          </span>
          <div className="flex gap-1" aria-label="Cycle position">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < cycle ? 'bg-zinc-300' : 'bg-zinc-700'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="font-mono text-3xl tabular-nums text-zinc-100 text-center my-1" suppressHydrationWarning>
          {formatTime(remaining)}
        </div>
        <div className="flex gap-1 mt-2">
          <button
            onClick={toggle}
            className="flex-1 px-2 py-1 text-xs rounded border border-zinc-700 hover:border-zinc-500 text-zinc-100 bg-zinc-800 hover:bg-zinc-700"
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="px-2 py-1 text-xs rounded border border-zinc-800 hover:border-zinc-600 text-zinc-300"
          >
            Reset
          </button>
          <button
            onClick={skip}
            className="px-2 py-1 text-xs rounded border border-zinc-800 hover:border-zinc-600 text-zinc-300"
            title="Skip to next phase"
          >
            Skip
          </button>
        </div>
        <div className="mt-2 text-[10px] text-zinc-500 text-center">
          <kbd className="px-1 py-0.5 bg-zinc-800 rounded">p</kbd> start/pause &nbsp;
          <kbd className="px-1 py-0.5 bg-zinc-800 rounded">r</kbd> reset
        </div>
      </div>
    </>
  );
};
