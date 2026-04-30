import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajinder Singh',
    treatment: 'Dental Implants',
    rating: 5,
    text: 'I was very nervous about getting implants, but Dr. Mehtab made the entire procedure so comfortable. The clinic is spotless and the technology they use is impressive. Highly recommended in Batala!'
  },
  {
    name: 'Amanpreet Kaur',
    treatment: 'Root Canal',
    rating: 5,
    text: 'Best dentist experience ever. I had severe tooth pain and they accommodated me immediately. The root canal was completely painless. Dr. Mehtab is very professional and patient.'
  },
  {
    name: 'Vikas Sharma',
    treatment: 'Smile Designing',
    rating: 5,
    text: 'City Dental Care completely transformed my smile. The digital planning let me see my new teeth before we even started. The final veneers look so natural. Thank you!'
  },
  {
    name: 'Gurmeet Pal',
    treatment: 'Braces',
    rating: 4,
    text: 'Taking my daughter here for her orthodontic treatment. The staff is very friendly and they clearly explain every step of the process. Excellent pediatric care.'
  },
  {
    name: 'Sunita Devi',
    treatment: 'General Checkup & Scaling',
    rating: 5,
    text: 'Very hygienic clinic. The scaling was done very gently. Dr. Mehtab doesn\'t rush and explains how to maintain oral hygiene properly.'
  },
  {
    name: 'Karanvir Bhatt',
    treatment: 'Wisdom Tooth Extraction',
    rating: 5,
    text: 'I was afraid of the extraction, but it took hardly 10 minutes and I felt nothing. Healing was also very fast because of their laser technology.'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Patient Stories</h1>
          <p className="text-xl text-slate-400">
            Don&apos;t just take our word for it. Hear what our patients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((review, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] relative mt-8">
              <div className="absolute -top-6 right-8 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Quote className="w-5 h-5 text-white fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                &quot;{review.text}&quot;
              </p>
              
              <div className="border-t border-slate-800 pt-6 mt-auto">
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-teal-400 text-sm mt-1">{review.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
