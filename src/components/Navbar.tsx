'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white">Lattice</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors font-medium">
              Blog
            </Link>
            <Link href="/support" className="text-slate-300 hover:text-white transition-colors font-medium">
              Support
            </Link>
            <a
              href="/#pricing"
              className="px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Get Access — $27
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">
                Blog
              </Link>
              <Link href="/support" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors font-medium">
                Support
              </Link>
              <a
                href="/#pricing"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg text-center"
              >
                Get Access — $27
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
