import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';

const services = [
  { title: 'General Dentistry', desc: 'Routine checkups, cleanings, and preventive care to maintain oral heath.', icon: '🦷' },
  { title: 'Cosmetic Dentistry', desc: 'Smile designing, teeth whitening, and veneers for a perfect smile.', icon: '✨' },
  { title: 'Dental Implants', desc: 'Permanent replacement for missing teeth offering natural look.', icon: '🔩' },
  { title: 'Root Canal (RCT)', desc: 'Painless advanced root canal treatments to save infected teeth.', icon: '🩺' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-48 overflow-hidden min-h-[90vh] flex items-center bg-slate-900">
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent -z-10" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-sm font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Healthcare in Batala</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
              Advanced Dental Care with <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Modern Technology</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
              Experience painless, precise, and world-class dental treatments with Dr. Mehtab. We bring the latest in digital dentistry to your perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white font-semibold text-lg shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all flex items-center justify-center gap-2 group">
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="tel:+918968646399" className="w-full sm:w-auto px-10 py-5 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-lg transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 text-teal-400" />
                Call +91 8968646399
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-950 relative border-t border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Treatments</h2>
            <p className="text-slate-400 text-lg">We offer a full spectrum of dental care leveraging advanced digital workflows for precise, predictable, and painless outcomes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link href="/services" key={i} className="group relative bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center text-sm font-medium text-teal-400/80 group-hover:text-teal-400">
                  Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors border-b border-slate-700 hover:border-teal-400 pb-1">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-slate-800">
                <Image
                  src="/dr-mehtab.jpg"
                  alt="Dr. Mehtab"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 border border-slate-800 text-blue-400 text-sm font-medium">
                About The Clinic
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Trust Your Smile to Expert Hands</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Led by Dr. Mehtab, City Dental Care is Batala&apos;s premier destination for advanced dentistry. Our philosophy is rooted in patient comfort, adopting a gentle approach assisted by the latest diagnostic and therapeutic technology.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">State-of-the-Art Technology</h4>
                    <p className="text-slate-400 text-sm">Our clinic is equipped with digital scanners and advanced imaging for precision.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Painless Treatments</h4>
                    <p className="text-slate-400 text-sm">We ensure minimum discomfort using modern anesthesia techniques.</p>
                  </div>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-slate-800 mt-8">
                <Link href="/about" className="px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-semibold transition-colors inline-block">
                  More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
