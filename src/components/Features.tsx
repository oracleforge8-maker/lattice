export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: '50+ AI Career Prompts',
      description: 'Ready-to-use prompts for ChatGPT, Claude, and Gemini that help with job search, career planning, and professional development.',
      items: ['Job search strategies', 'Career pivot planning', 'Skill gap analysis', 'Professional branding']
    },
    {
      icon: '📄',
      title: '10 ATS-Optimized Resume Templates',
      description: 'Beat applicant tracking systems with templates designed by HR professionals and tested against top ATS platforms.',
      items: ['Google Docs & Word formats', 'Multiple industry styles', 'ATS-tested formatting', 'Easy customization']
    },
    {
      icon: '✉️',
      title: 'Cover Letter Generator Kit',
      description: 'AI prompts that generate personalized, compelling cover letters tailored to any job description in minutes.',
      items: ['Industry-specific templates', 'Tone adjustment prompts', 'Achievement highlighting', 'Call-to-action formulas']
    },
    {
      icon: '🎯',
      title: 'Interview Preparation System',
      description: 'Comprehensive AI prompts for behavioral questions, technical interviews, case studies, and salary negotiations.',
      items: ['STAR method prompts', 'Technical prep guides', 'Question banks', 'Follow-up templates']
    },
    {
      icon: '💰',
      title: 'Salary Negotiation Scripts',
      description: 'Data-backed prompts and scripts to help you negotiate higher compensation with confidence.',
      items: ['Market research prompts', 'Counter-offer scripts', 'Benefits negotiation', 'Remote work negotiation']
    },
    {
      icon: '🔗',
      title: 'LinkedIn Optimization Guide',
      description: 'Transform your LinkedIn profile into a recruiter-magnet with AI-optimized headlines, summaries, and content strategies.',
      items: ['Headline formulas', 'Summary templates', 'Content calendar', 'Networking scripts']
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Everything You Need to Land Your Dream Job
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A complete AI-powered toolkit designed by career coaches and HR professionals 
            to give you an unfair advantage in the job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-100 dark:border-slate-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <svg className="w-4 h-4 text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
