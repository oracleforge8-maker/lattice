import Link from 'next/link';

export const metadata = {
  title: 'Resume Template That Gets Past ATS Systems | Lattice Blog',
  description: 'Most resumes get rejected by software before a human sees them. Here is the exact format that passes ATS and impresses recruiters.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-100 hover:text-white text-sm mb-4 inline-block">← Back to Blog</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">The Resume Template That Gets Past ATS Systems in 2026</h1>
          <div className="flex items-center gap-3 text-primary-100 text-sm">
            <span>August 29, 2026</span><span>•</span><span>4 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            Here is a shocking statistic: 75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them.
          </p>
          <p className="text-slate-600 leading-relaxed">
            That means your perfectly crafted resume could be getting filtered out because of formatting issues you did not even know existed.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">What is an ATS?</h2>
          <p className="text-slate-600 leading-relaxed">
            Applicant Tracking Systems are software used by 99% of Fortune 500 companies to filter resumes. They scan for keywords, formatting, and structure. If your resume does not meet their criteria, it gets rejected automatically.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">The 5 ATS Killers (And How to Fix Them)</h2>
          
          <h3 className="text-xl font-semibold text-slate-800 mb-2">1. Tables and Columns</h3>
          <p className="text-slate-600 leading-relaxed">ATS systems read left-to-right, top-to-bottom. Multi-column layouts confuse them. Use a single-column format.</p>

          <h3 className="text-xl font-semibold text-slate-800 mb-2">2. Headers and Footers</h3>
          <p className="text-slate-600 leading-relaxed">Information in headers/footers often gets skipped entirely. Put your contact info in the main body.</p>

          <h3 className="text-xl font-semibold text-slate-800 mb-2">3. Graphics and Icons</h3>
          <p className="text-slate-600 leading-relaxed">That fancy skills bar chart? The ATS sees it as a broken image. Use text percentages instead.</p>

          <h3 className="text-xl font-semibold text-slate-800 mb-2">4. Unusual Fonts</h3>
          <p className="text-slate-600 leading-relaxed">Stick to Arial, Calibri, or Garamond. Creative fonts can scramble your text when parsed.</p>

          <h3 className="text-xl font-semibold text-slate-800 mb-2">5. Missing Keywords</h3>
          <p className="text-slate-600 leading-relaxed">Mirror the exact phrases from the job description. If they say "project management" and you say "project coordination," you might get filtered out.</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">The Format That Works</h2>
          <p className="text-slate-600 leading-relaxed">
            After analyzing hundreds of successful resumes, here is the structure that consistently passes ATS:
          </p>
          <ul className="text-slate-600 space-y-2">
            <li>Contact info at the top (name, phone, email, LinkedIn)</li>
            <li>Professional summary (3-4 lines max)</li>
            <li>Core competencies (bullet points with keywords)</li>
            <li>Work experience (STAR method bullets with numbers)</li>
            <li>Education at the bottom</li>
          </ul>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Get 10 ATS-Optimized Templates</h2>
            <p className="text-slate-600 mb-6">Ready-to-use templates in Google Docs and Word format. Just fill in your info and apply.</p>
            <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
              Get Instant Access — $27
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
