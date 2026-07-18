import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | BezaTo Consultancy";
  }, []);

  return (
    <Layout>
      <div className="bg-[#1a0a2e] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-6 max-w-3xl space-y-5 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Let's talk about your goals</h1>
          <p className="text-lg text-purple-200/60 leading-relaxed">
            Message us on WhatsApp for the fastest response — cohort schedules, pricing, and program advice.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center space-y-3 shadow-sm">
            <MapPin className="mx-auto text-purple-700" size={24} />
            <p className="font-bold text-gray-900 text-sm">Location</p>
            <p className="text-gray-500 text-sm">Ogbomosho Avenue Dopemu, Lagos, Nigeria</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center space-y-3 shadow-sm">
            <Phone className="mx-auto text-purple-700" size={24} />
            <p className="font-bold text-gray-900 text-sm">WhatsApp / Text</p>
            <p className="text-gray-500 text-sm">+234 913 773 0282<br /><span className="text-xs text-yellow-600">No calls</span></p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center space-y-3 shadow-sm">
            <Mail className="mx-auto text-purple-700" size={24} />
            <p className="font-bold text-gray-900 text-sm">Email</p>
            <p className="text-gray-500 text-sm break-all">bezaleeltouch82@gmail.com</p>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppCTA
            message="Hello BezaTo, I'd like to get in touch about your programs."
            text="Message Us on WhatsApp"
            size="lg"
          />
        </div>
      </div>
    </Layout>
  );
}
