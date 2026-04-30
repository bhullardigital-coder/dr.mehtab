import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ShieldCheck, Clock } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const servicesLinks = [
  { name: 'Dental Implants', href: '/services' },
  { name: 'Cosmetic Dentistry', href: '/services' },
  { name: 'Root Canal Treatment', href: '/services' },
  { name: 'Orthodontics', href: '/services' },
  { name: 'Laser Dentistry', href: '/services' },
  { name: 'Digital Smile Designing', href: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-teal-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="inline-block mb-4">
                <h2 className="text-2xl font-bold text-slate-50">City Dental Care</h2>
                <p className="text-sm text-teal-400 font-medium tracking-widest uppercase mt-1">Dr. Mehtab</p>
              </Link>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Advanced dental care blending modern technology with a patient-first approach for your perfect smile.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/1LpLk4D1uP/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/50 hover:bg-teal-400/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-50 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-500" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-slate-50 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors inline-block hover:translate-x-1 transform duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-50 mb-6">Contact Us</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>Umarpura Chowk, Shri Hargobindpur Road, Batala, Punjab, India – 143505</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="tel:+918968646399" className="hover:text-teal-400 transition-colors">+91 8968646399</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="mailto:pb18citydentalcare@gmail.com" className="hover:text-teal-400 transition-colors">pb18citydentalcare@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 pt-2">
                <Clock className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-300">Clinic Hours</p>
                  <p className="text-sm mt-1">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm">Sun: Prior Appointment</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800/50 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} City Dental Care. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
