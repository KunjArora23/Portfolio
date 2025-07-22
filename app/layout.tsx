import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kunj Arora - Full Stack Developer',
  description: 'Official portfolio of Kunj Arora, a passionate Full Stack Developer skilled in the MERN stack. Experienced in building scalable web applications, solving real-world problems, and backend systems.',
  keywords: ['Kunj Arora', 'Full Stack Developer', 'MERN Stack', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Web Development'],
  authors: [{ name: 'Kunj Arora' }],
  openGraph: {
    title: 'Kunj Arora - Full Stack Developer',
    description: 'Explore projects, skills, and achievements of Kunj Arora — a MERN Stack Developer focused on building efficient and user-friendly web applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunj Arora - Full Stack Developer',
    description: 'Explore projects, skills, and achievements of Kunj Arora — a MERN Stack Developer focused on building efficient and user-friendly web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}