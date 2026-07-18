import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logoIcon from '@assets/FAVICON.png';
import logoText from '@assets/TEXT.png';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Programs' },
    { href: '/blog', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur border-b border-gray-100'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logoIcon}
            alt="BezaTo icon"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src={logoText}
            alt="BezaTo"
            className="h-8 w-auto object-contain hidden sm:block"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                location === link.href
                  ? 'text-purple-900'
                  : 'text-gray-500 hover:text-purple-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="font-bold bg-purple-900 hover:bg-yellow-400 hover:text-purple-900 text-white rounded-full px-7 h-11 shadow-lg hover:shadow-yellow-200/50 transition-all duration-300 text-sm tracking-wide">
            <a href="https://wa.me/2349137730282?text=Hello%20BezaTo%2C%20I%20want%20to%20enrol!" target="_blank" rel="noopener noreferrer">
              Enrol Now
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-purple-900 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b shadow-xl py-6 px-6 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                location === link.href
                  ? 'bg-purple-50 text-purple-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-purple-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <Button asChild className="w-full font-bold bg-purple-900 hover:bg-yellow-400 hover:text-purple-900 text-white h-12">
              <a href="https://wa.me/2349137730282?text=Hello%20BezaTo%2C%20I%20want%20to%20enrol!" target="_blank" rel="noopener noreferrer">
                Enrol via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
