import Link from 'next/link';

export const metadata = {
  title: '5 AI Prompts That Land Interviews | Lattice Blog',
  description: 'Discover the exact AI prompts that helped professionals land interviews at top companies.',
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-100 hover:text-white text-sm mb-4 inline-block">← Back to Blog</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">5 AI Prompts That Land Interviews at Top Companies</h1>
          <div className="flex items-center gap-3 text-primary-100 text-sm">
            <span>August 29, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-slate prose-lg max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            After months of job searching, I discovered something that changed everything: the right AI prompts can dramatically increase your interview rate.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Why Most Job Applications Fail</h2>
          <p className="text-slate-600 leading-relaxed">
            Most resumes get rejected by Applicant Tracking Systems (ATS) before a human ever sees them. Your application needs to pass two filters:
          </p>
          <ul className="text-slate-600 space-y-2">
            <li><strong>The ATS filter</strong> — Software that scans for keywords and formatting</li>
            <li><strong>The human filter</strong> — A recruiter who spends 6 seconds on your resume</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Prompt 1: Resume Optimizer</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>Act as a senior career coach. I am applying for a [JOB TITLE] role at [COMPANY].</p>
            <p className="mt-2">Here is my resume: [PASTE RESUME]</p>
            <p className="mt-2">Here is the job description: [PASTE JOB DESCRIPTION]</p>
            <p className="mt-2">Please rewrite my bullet points using STAR method with quantifiable results.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Prompt 2: Cover Letter Generator</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>Write a cover letter for [JOB TITLE] at [COMPANY].</p>
            <p className="mt-2">My background: [2-3 SENTENCES]</p>
            <p className="mt-2">Structure with: opening hook, 2-3 achievements with numbers, call to action. Under 250 words.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Prompt 3: Interview Prep</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>Act as an interviewer for [JOB TITLE]. Ask one behavioral question at a time using STAR method.</p>
            <p className="mt-2">After I respond: evaluate (1-10), suggest improvement, ask follow-up.</p>
            <p className="mt-2">Start with: "Tell me about a time you faced conflict with a coworker."</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Prompt 4: Salary Negotiation</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>I received an offer for [JOB TITLE] at [AMOUNT]. Help me negotiate higher.</p>
            <p className="mt-2">Create: market research points, counter-offer email, scripts for objections.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">Prompt 5: LinkedIn Optimization</h2>
          <div className="bg-slate-800 text-slate-100 rounded-lg p-6 font-mono text-sm">
            <p>Optimize my LinkedIn for [TARGET ROLE].</p>
            <p className="mt-2">Provide: 5 headline options, optimized summary, 5 content ideas.</p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Get All 50+ AI Prompts</h2>
            <p className="text-slate-600 mb-6">Plus 10 resume templates, cover letter kit, interview prep, and salary scripts.</p>
            <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
              Get Instant Access — $27
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
