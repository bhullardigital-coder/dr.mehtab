'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-teal-900/10 py-3 border-b border-slate-800/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-blue-500 flex items-center justify-center p-0.5 transform group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
                  C
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-50">
                City Dental Care
              </h1>
              <p className="text-[10px] text-teal-400 font-medium tracking-widest uppercase">
                Dr. Mehtab
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm font-medium text-slate-50 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call Now</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm font-medium text-slate-950 bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-90 px-5 py-2.5 rounded-full transition-all shadow-[0_4px_14px_0_rgba(20,184,166,0.39)]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-4 shadow-xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-slate-50 bg-slate-800 py-3 rounded-xl border border-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>Call +91 8968646399</span>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-slate-950 bg-gradient-to-r from-teal-400 to-blue-500 py-3 rounded-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
