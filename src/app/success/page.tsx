'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      sessionStorage.setItem('lattice_session', sessionId);
    }
  }, [sessionId]);

  const handleDownload = () => {
    const storedSession = sessionStorage.getItem('lattice_session');
    if (storedSession) {
      window.location.href = `/api/download?session=${storedSession}`;
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-primary-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Payment Successful!
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Thank you for your purchase. A confirmation email with your download link is on its way.
          </p>

          <button
            onClick={handleDownload}
            className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mb-4"
          >
            Download Your Pack Now
          </button>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Check your email for the download link. It may take a few minutes to arrive.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">What's Next?</h3>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 text-left">
              <li>1. Check your email for the download link</li>
              <li>2. Download and unzip the pack</li>
              <li>3. Start with the resume templates</li>
              <li>4. Use the AI prompts to customize</li>
              <li>5. Land your dream job!</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-primary-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
