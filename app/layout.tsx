import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Dental Care | Premium Dental Clinic in Batala',
  description: 'Advanced dental care blending modern technology with a patient-first approach. Dr. Mehtab at Umarpura Chowk, Batala, Punjab.',
  keywords: 'Best Dentist in Batala, Dental Clinic in Batala Punjab, Dr. Mehtab, City Dental Care, Root Canal, Cosmetic Dentistry'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased min-h-screen flex flex-col selection:bg-teal-500/30 selection:text-teal-200`} suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
