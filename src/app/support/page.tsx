'use client';

import { useState } from 'react';

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = `Lattice Support from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:oracleforge8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-primary-100 text-lg">How can we help you today?</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg shadow-sm border border-slate-200">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-800">
                  {faq.q}
                  <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-slate-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Contact Us</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Email Client Opened!</h3>
              <p className="text-slate-600">Your email client should have opened. Send it through and we will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg" placeholder="How can we help you?" />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg disabled:opacity-50">
                  {loading ? 'Opening...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </section>
        <section className="mt-12 text-center">
          <p className="text-slate-600">Email us directly at <a href="mailto:oracleforge8@gmail.com" className="text-primary-500 hover:underline font-medium">oracleforge8@gmail.com</a></p>
        </section>
      </div>
    </main>
  );
}

const faqs = [
  { q: 'How do I download my purchase?', a: 'After payment, you will be redirected to a success page with a download link. You will also receive an email with the link. Check your spam folder if you do not see it.' },
  { q: 'What formats are the resume templates?', a: 'The templates are in Markdown format that you can copy into Google Docs, Microsoft Word, or any text editor.' },
  { q: 'Can I get a refund?', a: 'All sales are final. Due to the digital nature of our products, once downloaded, they cannot be returned. However, if you experience any issues with your download or need help using the products, our support team is here to help.' },
  { q: 'The download link is not working?', a: 'Check your email for the download link. If it is not working, contact us and we will send a new link immediately.' },
  { q: 'Can I use the prompts with any AI tool?', a: 'Yes! The prompts work with ChatGPT, Claude, Gemini, and any other AI assistant.' },
  { q: 'Is my payment secure?', a: 'Absolutely. All payments are processed through Stripe. We never store your credit card information.' },
  { q: 'How do I contact support?', a: 'Email us at oracleforge8@gmail.com or use the contact form on this page. We respond within 24 hours.' },
  { q: 'Do you offer bulk discounts?', a: 'For bulk purchases (10+ licenses), contact us directly for custom pricing.' }
];
