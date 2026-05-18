'use client';

import { useEffect, useRef, useState } from 'react';

const isFsActive = (): boolean => {
  if (typeof document === 'undefined') return false;
  return !!document.fullscreenElement;
};

const requestFs = async (): Promise<void> => {
  const el = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
  };
  if (el.requestFullscreen) return el.requestFullscreen();
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
};

const exitFs = async (): Promise<void> => {
  const d = document as Document & { webkitExitFullscreen?: () => Promise<void> };
  if (d.exitFullscreen) return d.exitFullscreen();
  if (d.webkitExitFullscreen) return d.webkitExitFullscreen();
};

export const FullscreenToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [fs, setFs] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const sync = () => setFs(isFsActive());
    sync();
    document.addEventListener('fullscreenchange', sync);
    document.addEventListener('webkitfullscreenchange', sync);
    return () => {
      document.removeEventListener('fullscreenchange', sync);
      document.removeEventListener('webkitfullscreenchange', sync);
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  const toggle = async () => {
    try {
      if (!isFsActive()) {
        await requestFs();
        showToast('Fullscreen on — press Esc or f to exit');
      } else {
        await exitFs();
      }
    } catch {
      // Most likely the browser blocked the request without a user gesture; ignore.
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || (t && t.isContentEditable)) return;
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        void toggle();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => void toggle()}
        title={fs ? 'Exit fullscreen (f or Esc)' : 'Enter fullscreen (f)'}
        aria-label={fs ? 'Exit fullscreen' : 'Enter fullscreen'}
        className="fixed top-3 right-3 z-40 px-2 py-1 text-[11px] rounded border border-zinc-800 bg-zinc-900/70 backdrop-blur text-zinc-400 hover:text-zinc-100 hover:border-zinc-500"
      >
        {fs ? 'exit fullscreen' : 'fullscreen'}
        <span className="ml-1 text-zinc-600">·</span>
        <kbd className="ml-1 px-1 py-0.5 text-[10px] rounded bg-zinc-800 text-zinc-400">f</kbd>
      </button>
      {toast && (
        <div
          className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded border border-zinc-700 bg-zinc-900 text-zinc-100 text-sm shadow-lg"
          role="status"
        >
          {toast}
        </div>
      )}
    </>
  );
};
