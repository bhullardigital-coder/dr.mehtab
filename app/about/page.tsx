import Image from 'next/image';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';
import drMehtabImg from '../../public/dr-mehtab.jpg';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-6 mb-20 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">About City Dental Care</h1>
        <p className="text-xl text-slate-400">
          We combine compassion with cutting-edge technology to redefine your dental experience in Batala.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Dr. Mehtab</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Dr. Mehtab is a passionate and dedicated dental practitioner whose core philosophy revolves around saving natural teeth and providing aesthetic solutions that last. With extensive training in modern dentistry, Dr. Mehtab ensures every patient receives personalized care.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Understanding that dental visits can be anxiety-inducing, our team focuses heavily on painless dentistry. We listen, diagnose precisely using modern imaging, and clearly explain treatment plans.
            </p>
            
            {/* Certifications placeholder */}
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">Qualifications & Memberships</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal-400" /> B.D.S. (Bachelor of Dental Surgery)
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal-400" /> Advanced Certification in Endodontics
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal-400" /> Member of State Dental Council Punjab
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={drMehtabImg}
                alt="Dr. Mehtab"
                fill
                placeholder="blur"
                className="object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <Heart className="w-10 h-10 text-teal-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To provide ethical, high-quality, and affordable dental care in a safe, comfortable environment. We strive to educate our patients about oral health.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <Sparkles className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              To be the most trusted and technologically advanced dental clinic in Punjab, continuously adopting innovations to deliver superior smiles.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
            <Shield className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Patient-First Ethics</h3>
            <p className="text-slate-400 leading-relaxed">
              No unnecessary treatments. We diagnose accurately, discuss honestly, and execute flawlessly, prioritizing what&apos;s truly best for your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
