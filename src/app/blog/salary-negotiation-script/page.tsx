import Link from 'next/link';

export const metadata = {
  title: 'Salary Negotiation Script: How to Ask for More Money | Lattice Blog',
  description: 'Most people leave money on the table. Here is exactly what to say to negotiate a higher offer — word for word scripts included.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-100 hover:text-white text-sm mb-4 inline-block">← Back to Blog</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Salary Negotiation Script: How to Ask for More Money</h1>
          <div className="flex items-center gap-3 text-primary-100 text-sm">
            <span>August 29, 2026</span><span>•</span><span>4 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            Here is a truth that could cost you hundreds of thousands of dollars over your career: most employers expect you to negotiate.
          </p>
          <p className="text-slate-600 leading-relaxed">
            That initial offer? It is almost never their best offer. They are waiting for you to ask for more. And if you do not ask, you are leaving money on the table.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Why People Do Not Negotiate</h2>
          <ul className="text-slate-600 space-y-2">
            <li>Fear of losing the offer (rarely happens)</li>
            <li>Do not know what to say</li>
            <li>Feel grateful just to have an offer</li>
            <li>Worry about seeming greedy</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            Here is the reality: negotiating is expected. Employers respect candidates who advocate for themselves. Not negotiating signals you lack confidence.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">The Counter-Offer Email</h2>
          <p className="text-slate-600 leading-relaxed">Here is a template that works:</p>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>Subject: Excited about the offer — quick question</p>
            <p className="mt-4">Hi [Name],</p>
            <p className="mt-2">Thank you so much for the offer. I am genuinely excited about the opportunity to join [Company] and contribute to [specific project/team].</p>
            <p className="mt-2">Based on my research on market rates for this role and the [specific skills/experience] I bring, I was expecting something closer to [X + 15%]. Is there flexibility on the compensation?</p>
            <p className="mt-2">I am confident I can deliver [specific value] and would love to make this work.</p>
            <p className="mt-2">Best regards,<br/>[Your Name]</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Key Principles</h2>
          <ul className="text-slate-600 space-y-2">
            <li><strong>Always be grateful</strong> — Start with excitement about the offer</li>
            <li><strong>Use data</strong> — Reference market research, not personal needs</li>
            <li><strong>Be specific</strong> — Ask for a specific number, not a range</li>
            <li><strong>Give a reason</strong> — Tie your ask to the value you bring</li>
            <li><strong>Leave room</strong> — Ask for 15% more than your target</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">What If They Say No?</h2>
          <p className="text-slate-600 leading-relaxed">
            If they cannot move on salary, negotiate other benefits:
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>Signing bonus (one-time cost to them)</li>
            <li>Extra PTO days</li>
            <li>Remote work flexibility</li>
            <li>Earlier performance review (3 months vs 6)</li>
            <li>Professional development budget</li>
          </ul>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Get More Scripts Like This</h2>
            <p className="text-slate-600 mb-6">Plus interview prep, cover letter templates, and LinkedIn optimization guides.</p>
            <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
              Get Instant Access — $27
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
