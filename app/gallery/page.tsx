'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/clinic-reception-1.jpg', alt: 'Clinic Reception', width: 'col-span-2 md:col-span-1', height: 'row-span-2', objectPosition: 'object-top' },
  { src: '/operation-theatre.jpg', alt: 'Operation Theatre', width: 'col-span-2 md:col-span-2', height: 'row-span-1', objectPosition: 'object-center' },
  { src: '/dental-chair.jpg', alt: 'Dental Care in Action', width: 'col-span-1 md:col-span-1', height: 'row-span-1', objectPosition: 'object-center' },
  { src: '/consultation-room.jpg', alt: 'Consultation Room', width: 'col-span-2 md:col-span-2', height: 'row-span-2', objectPosition: 'object-center' },
  { src: '/advanced-x-ray.jpg', alt: 'Advanced Diagnostics', width: 'col-span-1 md:col-span-2', height: 'row-span-1', objectPosition: 'object-center' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Our Clinic</h1>
          <p className="text-xl text-slate-400">
            Take a virtual tour of City Dental Care. A space designed to keep you relaxed and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] max-w-6xl mx-auto">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group border border-slate-800 cursor-pointer ${img.width} ${img.height}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover ${img.objectPosition} group-hover:scale-105 transition-all duration-500`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen Preview"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
