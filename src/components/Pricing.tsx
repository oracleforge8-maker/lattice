'use client';

import { useState } from 'react';

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Purchase error:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    '50+ AI Career Prompts (all major AI platforms)',
    '10 ATS-Optimized Resume Templates',
    'Cover Letter Generator Kit',
    'Interview Preparation System',
    'Salary Negotiation Scripts',
    'LinkedIn Optimization Guide',
    'Lifetime free updates',
    'Email support'
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Invest in Your Future
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            One-time payment. Lifetime access. No subscriptions, no hidden fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-primary-500 overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              BEST VALUE
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                AI Career Acceleration Pack
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Complete career toolkit with everything you need
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-slate-800 dark:text-slate-100">$27</span>
                <span className="text-slate-500 dark:text-slate-400 line-through text-lg">$97</span>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold px-2 py-1 rounded">
                  72% OFF
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePurchase}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? 'Redirecting to Checkout...' : 'Get Instant Access Now'}
              </button>

              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span>Secure</span>
                <span>•</span>
                <span>Instant</span>
                <span>•</span>
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-6 py-3">
              <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 dark:text-slate-300 font-medium">
                All Sales Final
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Digital products cannot be returned. Contact support for any issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
