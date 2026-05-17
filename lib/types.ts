export type UnitId = 1 | 2 | 3 | 4;

export type Unit = {
  id: UnitId;
  name: string;
  examWeight: number; // 0.4/3 for U1-3, 0.6 for U4
};

export type Topic = {
  id: string;
  unitId: UnitId;
  name: string;
  description: string;
};

export type Flashcard = {
  id: string;
  topicId: string;
  front: string;
  back: string;
};

export type Question = {
  id: string;
  topicId: string;
  kind: 'mcq' | 'short';
  prompt: string;
  choices?: string[];
  answer: string;
  explanation: string;
};

export type CardBucket = 1 | 2 | 3;

export type CardReview = {
  bucket: CardBucket;
  lastReviewed: number;
  nextDue: number;
};

export type Attempt = {
  questionId: string;
  correct: boolean;
  at: number;
};

export type ReviewState = {
  cards: Record<string, CardReview>;
  attempts: Attempt[];
  schemaVersion: 1;
};

export type PomodoroPhase = 'work' | 'break';

export type PomodoroState = {
  phase: PomodoroPhase;
  remainingMs: number;
  startedAt: number | null;
  completedWorkSessions: number;
  schemaVersion: 1;
};

export type Rating = 'again' | 'hard' | 'good';
