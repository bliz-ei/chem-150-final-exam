import type { ReviewState, PomodoroState } from './types';

const REVIEW_KEY = 'chem150-review-v1';
const POMODORO_KEY = 'chem150-pomodoro-v1';

const emptyReview = (): ReviewState => ({
  cards: {},
  attempts: [],
  schemaVersion: 1,
});

const defaultPomodoro = (): PomodoroState => ({
  phase: 'work',
  remainingMs: 25 * 60 * 1000,
  startedAt: null,
  completedWorkSessions: 0,
  schemaVersion: 1,
});

export const loadReview = (): ReviewState => {
  if (typeof window === 'undefined') return emptyReview();
  try {
    const raw = window.localStorage.getItem(REVIEW_KEY);
    if (!raw) return emptyReview();
    const parsed = JSON.parse(raw) as ReviewState;
    if (parsed.schemaVersion !== 1) return emptyReview();
    return parsed;
  } catch {
    return emptyReview();
  }
};

export const saveReview = (state: ReviewState) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(REVIEW_KEY, JSON.stringify(state));
};

export const loadPomodoro = (): PomodoroState => {
  if (typeof window === 'undefined') return defaultPomodoro();
  try {
    const raw = window.localStorage.getItem(POMODORO_KEY);
    if (!raw) return defaultPomodoro();
    const parsed = JSON.parse(raw) as PomodoroState;
    if (parsed.schemaVersion !== 1) return defaultPomodoro();
    return parsed;
  } catch {
    return defaultPomodoro();
  }
};

export const savePomodoro = (state: PomodoroState) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(POMODORO_KEY, JSON.stringify(state));
};

export const resetAll = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(REVIEW_KEY);
  window.localStorage.removeItem(POMODORO_KEY);
};
