import type { Flashcard, Question, Topic, UnitId } from './types';

export const UNIT_4_WEIGHT = 0.6;

export const pickWeighted = <T extends { topicId: string }>(
  items: T[],
  topicsById: Record<string, Topic>,
): T | null => {
  if (items.length === 0) return null;
  const u4: T[] = [];
  const others: T[] = [];
  for (const it of items) {
    const t = topicsById[it.topicId];
    if (!t) {
      others.push(it);
      continue;
    }
    if (t.unitId === 4) u4.push(it);
    else others.push(it);
  }
  // If one bucket is empty fall back to the other.
  if (u4.length === 0) return others[Math.floor(Math.random() * others.length)];
  if (others.length === 0) return u4[Math.floor(Math.random() * u4.length)];
  const roll = Math.random();
  const pool = roll < UNIT_4_WEIGHT ? u4 : others;
  return pool[Math.floor(Math.random() * pool.length)];
};

export const filterByQuery = <T extends { topicId: string }>(
  items: T[],
  topicsById: Record<string, Topic>,
  topicId: string | null,
  unitId: UnitId | null,
): T[] => {
  if (topicId) return items.filter((i) => i.topicId === topicId);
  if (unitId) {
    return items.filter((i) => {
      const t = topicsById[i.topicId];
      return t ? t.unitId === unitId : false;
    });
  }
  return items;
};

export const shuffled = <T>(arr: T[]): T[] => {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

export type _CardOrQuestion = Flashcard | Question;
