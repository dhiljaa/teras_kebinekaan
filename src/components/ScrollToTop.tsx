import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground shadow-lg hover:shadow-[var(--primary-glow)] transition-all duration-300 p-0"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;