import Image from 'next/image';
import { Cpu, Scan, Aperture, Fingerprint, Zap } from 'lucide-react';

const technologies = [
  {
    icon: <Scan className="w-8 h-8 text-teal-400" />,
    title: 'Intraoral Scanners',
    desc: 'Say goodbye to messy, gag-inducing dental molds. Our digital scanners capture highly precise 3D images of your teeth in seconds, ensuring perfect fits for crowns and aligners.'
  },
  {
    icon: <Aperture className="w-8 h-8 text-blue-400" />,
    title: 'CBCT & 3D Imaging',
    desc: 'Cone Beam Computed Tomography provides 3D views of the teeth, nerve pathways, and bone. Crucial for perfectly planned implant surgeries and complex root canals.'
  },
  {
    icon: <Zap className="w-8 h-8 text-indigo-400" />,
    title: 'Laser Dentistry Systems',
    desc: 'WaterLase and soft-tissue lasers allow us to perform procedures with pinpoint accuracy, often without drills or needles, minimizing bleeding and recovery time.'
  },
  {
    icon: <Cpu className="w-8 h-8 text-teal-400" />,
    title: 'CAD/CAM & Same-Day Crowns',
    desc: 'Computer-Aided Design and Manufacturing allow us to design, mill, and place ceramic crowns in just a single visit.'
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-blue-400" />,
    title: 'AI-Powered Diagnostics',
    desc: 'We utilize state-of-the-art AI software that analyzes digital x-rays to detect tiny cavities, bone loss, or pathologies that the human eye might miss.'
  }
];

export default function TechnologyPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Future-Ready Dentistry</h1>
          <p className="text-xl text-slate-400">
            Technology is at the heart of what we do. It makes treatments faster, safer, and infinitely more comfortable.
          </p>
        </div>

        <div className="relative mb-24">
          <div className="aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl">
            <Image
              src="/advanced-dental-technology.jpg"
              alt="Advanced Dental Technology"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-8 md:p-12">
               <h2 className="text-3xl font-bold text-white max-w-xl">Where precision meets comfort.</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-6 shadow-inner">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
