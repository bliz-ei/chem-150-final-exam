import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { PomodoroTimer } from '@/components/PomodoroTimer';
import { Countdown } from '@/components/Countdown';
import { FullscreenToggle } from '@/components/FullscreenToggle';

export const metadata: Metadata = {
  title: 'Chem 150 Study Hub',
  description: 'Final exam review: flashcards + practice questions, Unit-4-weighted.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-zinc-900">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="text-sm font-medium text-zinc-100 hover:text-white">
              Chem 150 Study Hub
            </Link>
            <nav className="flex items-center gap-4 text-sm text-zinc-400">
              <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
              <Link href="/guide/" className="hover:text-zinc-100">Guide</Link>
              <Link href="/cards/" className="hover:text-zinc-100">Cards</Link>
              <Link href="/practice/" className="hover:text-zinc-100">Practice</Link>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="hidden sm:inline text-xs text-zinc-500">
                exam in <Countdown />
              </span>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8 pb-32">{children}</main>
        <PomodoroTimer />
        <FullscreenToggle />
      </body>
    </html>
  );
}
