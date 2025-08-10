import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/teraskebinekaan", 
      label: "Instagram"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/teraskebinekaan", 
      label: "Facebook"
    },
    { 
      icon: MessageCircle, 
      href: "https://tiktok.com/@teraskebinekaan", 
      label: "TikTok"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mr-4">
                <img 
                  src="/teraslogo.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Teras Kebinekaan</h3>
                <p className="text-green-200 text-sm">Building Unity Through Diversity</p>
              </div>
            </div>
            
            <p className="text-green-100 mb-8 max-w-md">
              Organisasi yang berkomitmen mewujudkan masyarakat inklusif, toleran, setara, dan berkeadilan melalui semangat persatuan dalam keberagaman.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white hover:text-green-700 transition-all duration-300"
                    title={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Kontak</h4>
            <div className="space-y-4 text-sm">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-green-100">
                  <p>HP52+MW6, Jl. Mutiara II</p>
                  <p>Bojong Sempu, Kec. Parung</p>
                  <p>Kabupaten Bogor, Jawa Barat 16330</p>
                </div>
              </div>
              
              <a
                href="https://wa.me/6281388719217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-green-100 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>+62 813-8871-9217</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              
              <a
                href="mailto:teraskebinekan65@gmail.com"
                className="flex items-center space-x-3 text-green-100 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>teraskebinekan65@gmail.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-green-200 text-sm">
              © 2022 Teras Kebinekaan. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors duration-200">
                Terms
              </a>
              
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-yellow-400 text-green-700 rounded-lg flex items-center justify-center hover:bg-yellow-300 transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;