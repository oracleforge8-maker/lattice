import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lattice | AI Career Acceleration',
  description: 'Unlock your career potential with AI-powered tools, prompts, and templates. Get the AI Career Acceleration Pack today.',
  keywords: ['AI career', 'resume templates', 'job search', 'AI prompts', 'career growth'],
  openGraph: {
    title: 'Lattice | AI Career Acceleration',
    description: 'Unlock your career potential with AI-powered tools, prompts, and templates.',
    type: 'website',
    siteName: 'Lattice',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
