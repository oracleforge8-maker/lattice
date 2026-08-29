import Link from 'next/link';

export const metadata = {
  title: 'Blog | Lattice AI Career Acceleration',
  description: 'Career tips, resume advice, and AI prompts to help you land your dream job.',
};

const posts = [
  {
    slug: 'ai-prompts-for-job-search',
    title: '5 AI Prompts That Land Interviews at Top Companies',
    excerpt: 'Discover the exact AI prompts that helped professionals land interviews at FAANG companies. Copy, paste, customize, and start getting callbacks.',
    date: 'August 29, 2026',
    category: 'AI Prompts'
  },
  {
    slug: 'resume-template-2026',
    title: 'The Resume Template That Gets Past ATS Systems in 2026',
    excerpt: 'Most resumes get rejected by software before a human sees them. Here is the exact format that passes ATS and impresses recruiters.',
    date: 'August 29, 2026',
    category: 'Resumes'
  },
  {
    slug: 'salary-negotiation-script',
    title: 'Salary Negotiation Script: How to Ask for More Money',
    excerpt: 'Most people leave money on the table. Here is exactly what to say to negotiate a higher offer — word for word scripts included.',
    date: 'August 29, 2026',
    category: 'Negotiation'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Lattice Blog</h1>
          <p className="text-primary-100 text-lg">Career tips to help you land your dream job</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded">{post.category}</span>
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Get All 50+ AI Prompts</h2>
          <p className="text-slate-600 mb-6">Plus resume templates, cover letter kits, interview prep, and salary scripts.</p>
          <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all">
            Get Instant Access — $27
          </a>
        </div>
      </div>
    </main>
  );
}
