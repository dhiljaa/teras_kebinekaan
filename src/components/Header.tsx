import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Visi Misi', href: '#vision' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
          : 'bg-gradient-to-r from-green-600 via-green-700 to-green-800 shadow-lg'
      }`}
      style={{
        background: isScrolled 
          ? undefined 
          : 'linear-gradient(90deg, #018f43 0%, #016a32 50%, #014a24 100%)'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md border border-gray-100">
                <img 
                  src="/teraslogo.png" 
                  alt="Teras Kebinekaan Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div 
                className="absolute -inset-0.5 rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #018f43 0%, #ffce00 100%)' }}
              ></div>
            </div>
            <div className="flex flex-col">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Teras Kebinekaan
              </h1>
        
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-green-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  color: isScrolled ? undefined : undefined 
                }}
                onMouseEnter={(e) => {
                  if (isScrolled) e.target.style.color = '#018f43';
                }}
                onMouseLeave={(e) => {
                  if (isScrolled) e.target.style.color = '';
                }}
              >
                {item.name}
                <span 
                  className={`absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0`}
                  style={{ backgroundColor: isScrolled ? '#018f43' : 'white' }}
                ></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              className={`relative overflow-hidden font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'text-white shadow-lg hover:shadow-xl'
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              style={{
                background: isScrolled 
                  ? 'linear-gradient(135deg, #018f43 0%, #016a32 100%)' 
                  : '#ffffff',
                color: isScrolled ? '#ffffff' : '#018f43'
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Hubungi Kami</span>
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #ffce00 0%, #018f43 100%)' }}
              ></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pb-6 pt-4 space-y-2 ${
            isScrolled ? 'border-t border-gray-200' : 'border-t border-white/20'
          }`}>
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-green-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
                onMouseEnter={(e) => {
                  if (isScrolled) e.target.style.color = '#018f43';
                }}
                onMouseLeave={(e) => {
                  if (isScrolled) e.target.style.color = '';
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
            <Button 
                className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                style={{
                  background: isScrolled
                    ? 'linear-gradient(135deg, #018f43 0%, #016a32 100%)'
                    : '#ffffff',
                  color: isScrolled ? '#ffffff' : '#018f43'
                }}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-500`}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 206, 0, 0.1) 0%, rgba(1, 143, 67, 0.05) 100%)' }}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-lg" style={{ background: 'linear-gradient(135deg, rgba(1, 143, 67, 0.1) 0%, rgba(255, 206, 0, 0.05) 100%)' }}></div>
      </div>
    </header>
  );
};

export default Header;