import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-diversity.jpg';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const rotatingWords = ['Keberagaman', 'Persatuan', 'Toleransi', 'Kebinekaan'];
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Keberagaman dan Kebinekaan Indonesia" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(135deg, rgba(1, 143, 67, 0.85) 0%, rgba(1, 143, 67, 0.75) 50%, rgba(1, 143, 67, 0.85) 100%)`
        }}></div>
      </div>

      {/* Clean Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 rounded-full opacity-15 blur-xl" style={{ backgroundColor: '#ffce00', animation: 'float 6s ease-in-out infinite' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full opacity-10 blur-xl" style={{ backgroundColor: '#ffce00', animation: 'float 8s ease-in-out infinite reverse' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full opacity-12 blur-xl" style={{ backgroundColor: '#ffffff', animation: 'float 7s ease-in-out infinite' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-5xl">
        <div className={`transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Clean Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-8 shadow-lg" style={{ backgroundColor: '#ffce00' }}>
            <Heart className="w-8 h-8" style={{ color: '#018f43' }} />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block mb-2">Merajut</span>
            <span 
              className="block text-transparent bg-clip-text transition-all duration-500"
              style={{ 
                backgroundImage: `linear-gradient(45deg, #ffce00, #ffd700)`,
              }}
            >
              {rotatingWords[currentWord]}
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 opacity-95">
              Menguatkan Kebinekaan
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-95 max-w-4xl mx-auto leading-relaxed font-medium">
            Teras Kebinekaan hadir untuk mewujudkan masyarakat inklusif, setara, dan berkeadilan melalui semangat kebersamaan dan toleransi
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="px-8 py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0"
              style={{ backgroundColor: '#ffce00', color: '#018f43' }}
              onClick={() => scrollToSection('about')}
            >
              Pelajari Lebih Lanjut
            </Button>
            
            <Button
              variant="outline"
              className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-white hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ color: '#018f43' }}
              onMouseEnter={(e) => e.target.style.color = '#018f43'}
              onMouseLeave={(e) => e.target.style.color = '#018f43'}
              onClick={() => scrollToSection('programs')}
            >
              Lihat Program Kami
            </Button>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;