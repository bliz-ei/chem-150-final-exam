import type { CardBucket, CardReview, Rating, ReviewState } from './types';

const DAY = 24 * 60 * 60 * 1000;

const intervalForBucket = (bucket: CardBucket): number => {
  if (bucket === 1) return 1 * DAY;
  if (bucket === 2) return 3 * DAY;
  return 7 * DAY;
};

export const applyRating = (
  prev: CardReview | undefined,
  rating: Rating,
  now: number = Date.now(),
): CardReview => {
  const currentBucket: CardBucket = prev?.bucket ?? 1;
  let nextBucket: CardBucket;
  if (rating === 'again') nextBucket = 1;
  else if (rating === 'hard') nextBucket = currentBucket;
  else nextBucket = Math.min(3, currentBucket + 1) as CardBucket;
  return {
    bucket: nextBucket,
    lastReviewed: now,
    nextDue: now + intervalForBucket(nextBucket),
  };
};

export const isDue = (review: CardReview | undefined, now: number = Date.now()): boolean => {
  if (!review) return true;
  return review.nextDue <= now;
};

export const bucketCount = (state: ReviewState, cardIds: string[]): Record<CardBucket | 'new', number> => {
  const counts = { new: 0, 1: 0, 2: 0, 3: 0 } as Record<CardBucket | 'new', number>;
  for (const id of cardIds) {
    const r = state.cards[id];
    if (!r) counts.new += 1;
    else counts[r.bucket] += 1;
  }
  return counts;
};

export const dueCount = (state: ReviewState, cardIds: string[], now: number = Date.now()): number => {
  let n = 0;
  for (const id of cardIds) if (isDue(state.cards[id], now)) n += 1;
  return n;
};
