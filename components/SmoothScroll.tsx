'use client';

import { useEffect } from 'react';

type LocomotiveInstance = {
  destroy?: () => void;
};

export const SmoothScroll = () => {
  useEffect(() => {
    // Respect the user's OS-level "reduce motion" preference: skip smooth scroll entirely.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let instance: LocomotiveInstance | null = null;
    let cancelled = false;

    (async () => {
      try {
        const mod = await import('locomotive-scroll');
        if (cancelled) return;
        const LocomotiveScroll = mod.default;
        // Locomotive v5 wraps Lenis. With no args it smooths the document scroll.
        instance = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.1, // 0 = no smoothing, 1 = no inertia. 0.1 is the comfortable default.
          },
        }) as unknown as LocomotiveInstance;
      } catch {
        // If locomotive-scroll fails to load (network, build), fall back to native scroll.
      }
    })();

    return () => {
      cancelled = true;
      try {
        instance?.destroy?.();
      } catch {
        // ignore
      }
    };
  }, []);

  return null;
};
