import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const allServices = [
  {
    title: 'General Dentistry',
    desc: 'Comprehensive checkups, digital x-rays, professional scaling, and fillings to prevent decay and maintain overall oral health.',
    features: ['Teeth Cleaning', 'Composite Fillings', 'Fluoride Treatment'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80'
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Transform your look with veneers, teeth whitening, and contouring. We design smiles that boost your confidence.',
    features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeover'],
    image: 'https://images.unsplash.com/photo-1596706912389-9a008c26f047?w=800&q=80'
  },
  {
    title: 'Dental Implants',
    desc: 'The gold standard for missing teeth. We use high-quality titanium implants for a permanent, natural-looking solution.',
    features: ['Single Implants', 'Full Mouth Rehab', 'Bone Grafting'],
    image: 'https://images.unsplash.com/photo-1598256989487-7756f3d97af6?w=800&q=80'
  },
  {
    title: 'Root Canal Treatment (RCT)',
    desc: 'Save your natural tooth with our modern, painless RCT protocols using rotary endodontics and apex locators.',
    features: ['Single Visit RCT', 'Painless Procedure', 'Re-RCT'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80'
  },
  {
    title: 'Orthodontics',
    desc: 'Straighten your teeth seamlessly. We offer both traditional braces and modern clear aligners (like Invisalign).',
    features: ['Clear Aligners', 'Metal/Ceramic Braces', 'Retainers'],
    image: 'https://images.unsplash.com/photo-1596706912389-9a008c26f047?w=800&q=80'
  },
  {
    title: 'Laser Dentistry',
    desc: 'Minimally invasive soft tissue procedures. Less bleeding, faster healing, and often no need for anesthesia.',
    features: ['Gum Contouring', 'Depigmentation', 'Ulcer Treatment'],
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=80'
  },
  {
    title: 'Digital Smile Designing',
    desc: 'See your new smile before we even start. DSD uses advanced software to plan your cosmetic treatments perfectly.',
    features: ['3D Planning', 'Trial Smile', 'Predictable Results'],
    image: 'https://images.unsplash.com/photo-1536214532822-b5eef9badfa9?w=800&q=80'
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle, comforting care for your little ones. We focus on cavity prevention and instilling good dental habits early.',
    features: ['Pit & Fissure Sealants', 'Fluoride Treatment', 'Habit Counseling'],
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80'
  },
  {
    title: 'Oral Surgery & Periodontics',
    desc: 'From painless wisdom tooth extractions to advanced gum therapies to save loose teeth.',
    features: ['Wisdom Tooth Removal', 'Flap Surgery', 'Gingivectomy'],
    image: 'https://images.unsplash.com/photo-1629909615024-bcbc802f08f8?w=800&q=80'
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400">
            Comprehensive, technology-driven dental care tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, idx) => (
            <div key={idx} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-teal-500/50 transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>
              <div className="p-8 flex-1 flex flex-col pt-0 relative -mt-6">
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{service.desc}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors w-fit group/btn">
                  Book Consultation <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
