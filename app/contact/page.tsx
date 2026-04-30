'use client';

import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! We will get back to you soon.");
    }, 1500);
  };

  const whatsappLink = "https://wa.me/918968646399?text=Hello%20Dr.%20Mehtab,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400">
            Ready for a brighter smile? Book an appointment or get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <a href="tel:+918968646399" className="text-slate-400 hover:text-teal-400 transition-colors">+91 8968646399</a>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">Chat with us</a>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl sm:col-span-2 flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Clinic Address</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Umarpura Chowk, Shri Hargobindpur Road,<br />
                    Batala, Punjab, India – 143505
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl sm:col-span-2 flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Working Hours</h3>
                  <div className="text-slate-400 space-y-1">
                    <p>Monday - Saturday: <span className="text-white font-medium">9:00 AM - 8:00 PM</span></p>
                    <p>Sunday: <span className="text-white font-medium">By Appointment Only</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-800 h-[300px] relative w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.585507421835!2d75.1973419!3d31.8152525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ba10787eeb885%3A0xe5eb6c43428d098!2sBatala%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-10 rounded-[2rem]">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="+91 ...."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address (Optional)</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Required</label>
                <select 
                  id="service" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="general">General Checkup</option>
                  <option value="pain">Tooth Pain / Root Canal</option>
                  <option value="cosmetic">Cosmetic / Smile Design</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Braces / Aligners</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
