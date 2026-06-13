import Image from 'next/image';

const galleryImages = [
  { src: '/clinic-recetion.jpg', alt: 'Clinic Reception', width: 'col-span-2 md:col-span-1', height: 'row-span-2' },
  { src: '/operation-theatre.jpg', alt: 'Operation Theatre', width: 'col-span-2 md:col-span-2', height: 'row-span-1' },
  { src: '/dental-chair.jpg', alt: 'Dental Chair', width: 'col-span-1', height: 'row-span-1' },
  { src: '/consultation-room.jpg', alt: 'Consultation Room', width: 'col-span-2', height: 'row-span-2' },
  { src: '/advanced-x-ray.jpg', alt: 'Advanced X-Ray', width: 'col-span-1 md:col-span-2', height: 'row-span-1' },
];

export default function GalleryPage() {
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
            <div key={idx} className={`relative rounded-2xl overflow-hidden group border border-slate-800 ${img.width} ${img.height}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
