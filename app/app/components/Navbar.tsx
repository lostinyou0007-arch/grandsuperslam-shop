'use client';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-900/90 backdrop-blur-lg border-b border-amber-400/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">⚾</span>
          <span className="text-3xl font-black tracking-tighter text-amber-400">GRANDSUPERSLAM</span>
        </div>
        <LanguageSwitcher />
        <div className="flex items-center gap-8">
          <Link href="/shop" className="hover:text-amber-400">Shop</Link>
          <Link href="/stories" className="hover:text-amber-400">Stories</Link>
          <Link href="/affiliates" className="hover:text-amber-400">Earn 10%</Link>
          <button className="bg-amber-400 hover:bg-amber-300 text-black px-8 py-3 rounded-3xl font-bold flex items-center gap-2">
            <i className="fa-solid fa-bag-shopping"></i> Cart
          </button>
        </div>
      </div>
    </nav>
  );
}
