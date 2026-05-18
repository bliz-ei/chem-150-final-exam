'use client';

import { useEffect } from 'react';

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

type LenisCtor = new (opts?: Record<string, unknown>) => LenisInstance;

export const SmoothScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let aborted = false;

    import('lenis')
      .then((mod) => {
        if (aborted) return;
        const Lenis = mod.default as unknown as LenisCtor;
        lenis = new Lenis({
          // Lower lerp = more smoothing/inertia. 0.1 is the published default;
          // 0.08 gives it a slightly more noticeable glide.
          lerp: 0.08,
          smoothWheel: true,
          wheelMultiplier: 1,
        });

        const tick = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[SmoothScroll] failed to load lenis:', err);
      });

    return () => {
      aborted = true;
      if (rafId) cancelAnimationFrame(rafId);
      try {
        lenis?.destroy?.();
      } catch {
        // ignore
      }
    };
  }, []);

  return null;
};
