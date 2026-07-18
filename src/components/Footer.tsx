import { Link } from 'wouter';
import { Mail, MapPin, Phone, Instagram, ArrowRight } from 'lucide-react';
import logoIcon from '@assets/FAVICON.png';
import logoText from '@assets/TEXT.png';

export function Footer() {
  return (
    <footer className="bg-[#1a0a2e] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3 mb-2">
              <img src={logoIcon} alt="BezaTo icon" className="h-10 w-10 object-contain" />
              <img src={logoText} alt="BezaTo" className="h-7 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-purple-200/60 text-sm leading-relaxed">
              Premium data analytics training and consulting. We build world-class analysts equipped with tools, context, and confidence.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/bezaleel_touch?igsh=MWJ5eGNzNWdyMXlvMA==" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-yellow-400 hover:text-purple-900 hover:border-yellow-400 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/2349137730282" target="_blank" rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-green-500 hover:border-green-500 transition-all duration-300 text-xs font-bold flex items-center px-4">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-yellow-400 mb-6">Navigate</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/courses', label: 'Programs' },
                { href: '/blog', label: 'Insights' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-purple-200/60 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-yellow-400 mb-6">Programs</h3>
            <ul className="space-y-3">
              {[
                'Business Analysis',
                'Research Analysis',
                'Financial & Econometrics',
                'Database Management',
                'Data Analytics (Python/R)',
                'Machine Learning',
              ].map(track => (
                <li key={track}>
                  <Link href="/courses" className="text-purple-200/60 hover:text-yellow-400 transition-colors text-sm">
                    {track}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-yellow-400 mb-6">Reach Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-purple-200/60 text-sm">
                <MapPin className="text-yellow-400 shrink-0 mt-0.5" size={16} />
                <span>Ogbomosho Avenue Dopemu<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 text-purple-200/60 text-sm">
                <Phone className="text-yellow-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <a href="https://wa.me/2349137730282" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors block">
                    +234 913 773 0282
                  </a>
                  <span className="text-xs text-yellow-400/60">WhatsApp / Text only — no calls</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-purple-200/60 text-sm">
                <Mail className="text-yellow-400 shrink-0" size={16} />
                <a href="mailto:bezaleeltouch82@gmail.com" className="hover:text-yellow-400 transition-colors break-all">
                  bezaleeltouch82@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200/30 text-xs">
            &copy; {new Date().getFullYear()} BezaTo Consultancy. All rights reserved.
          </p>
          <div className="text-purple-200/30 text-xs font-semibold tracking-[0.2em] uppercase">
            Data <span className="text-yellow-400/40 mx-2">·</span> Strategy <span className="text-yellow-400/40 mx-2">·</span> Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
