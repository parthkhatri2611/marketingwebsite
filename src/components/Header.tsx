import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

export default function Header({ scrollY }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Pulse<span className="text-blue-600">Digital</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {['Home', 'Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
