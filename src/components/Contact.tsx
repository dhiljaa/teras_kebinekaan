import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, MessageCircle, ArrowRight, Sparkles, Users, Target, Award, X, ExternalLink, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua field yang diperlukan');
      return;
    }
    
    setIsSubmitting(true);
    
    // Create WhatsApp message template with proper encoding
    const whatsappMessage = encodeURIComponent(`Halo Teras Kebinekaan,

Perkenalkan saya ${formData.name} (${formData.email}).

Saya ingin menyampaikan pesan/pertanyaan sebagai berikut:
${formData.message}

Mohon kesediaannya untuk memberikan tanggapan.

Terima kasih atas perhatian dan waktunya.

Salam hormat.`);
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/6281388719217?text=${whatsappMessage}`;
    
    // Immediate redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success state and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 813-8871-9217",
      href: "https://wa.me/6281388719217",
      description: "Chat langsung dengan kami",
      color: "#25D366",
      displayValue: "+62 813-8871-9217"
    },
    {
      icon: Mail,
      title: "Email",
      value: "teraskebinekan65@gmail.com",
      href: "mailto:teraskebinekan65@gmail.com",
      description: "Kirim pesan profesional",
      color: "#EA4335",
      displayValue: "teraskebinekan65@gmail.com"
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "HP52+MW6, Jl. Mutiara II, Bojong Sempu, Kec. Parung, Kabupaten Bogor, Jawa Barat 16330",
      href: "#",
      description: "Kunjungi kantor kami",
      isMap: true,
      color: "#018f43",
      displayValue: "Bogor, Jawa Barat"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/teraskebinekaan", 
      label: "Instagram",
      username: "@teraskebinekaan",
      color: "#E4405F",
      bgColor: "bg-pink-500"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/teraskebinekaan", 
      label: "Facebook",
      username: "Teras Kebinekaan", 
      color: "#1877F2",
      bgColor: "bg-blue-600"
    },
    { 
      icon: MessageCircle, 
      href: "https://tiktok.com/@teraskebinekaan", 
      label: "TikTok",
      username: "@teraskebinekaan",
      color: "#000000",
      bgColor: "bg-black"
    }
  ];

  const stats = [
    { icon: Users, number: "1K+", label: "Community Members", color: "#018f43" },
    { icon: Target, number: "25+", label: "Active Programs", color: "#ffce00" },
    { icon: Award, number: "5+", label: "Years Impact", color: "#018f43" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#018f43' }}></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#ffce00' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-5" style={{ backgroundColor: '#018f43' }}></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-xl" style={{ backgroundColor: '#018f43' }}>
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#018f43' }}>
            Hubungi Kami
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#018f43' }}></div>
            <div className="mx-4 w-4 h-4 rounded-full" style={{ backgroundColor: '#ffce00' }}></div>
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: '#018f43' }}></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Mari bersama menciptakan perubahan positif untuk Indonesia yang lebih inklusif dan berkeadilan
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg" style={{ backgroundColor: stat.color }}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2" style={{ color: '#018f43' }}>{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <div className="h-2" style={{ backgroundColor: '#018f43' }}></div>
              
              <div className="p-10">
                <div className="mb-10">
                  <h3 className="text-4xl font-black mb-3" style={{ color: '#018f43' }}>Kirim Pesan</h3>
                  <p className="text-gray-600 text-lg">Kami senang mendengar dari Anda</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#018f43' }}>
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: '#018f43' }}>Pesan Terkirim!</h4>
                    <p className="text-gray-600">Terima kasih, kami akan segera merespons pesan Anda.</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Nama Lengkap *
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-14 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:bg-white transition-all duration-300 font-medium px-4 focus:outline-none"
                        placeholder="Masukkan nama lengkap Anda"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-14 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:bg-white transition-all duration-300 font-medium px-4 focus:outline-none"
                        placeholder="nama@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Pesan Anda *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:bg-white transition-all duration-300 resize-none font-medium p-4 focus:outline-none"
                        placeholder="Ceritakan kepada kami tentang ide, pertanyaan, atau bagaimana kita bisa berkolaborasi..."
                        required
                      />
                    </div>
                    
                    <button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-16 text-xl font-black text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border-0 hover:scale-105 disabled:opacity-50"
                      style={{ backgroundColor: '#018f43' }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Mengirim...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-6 h-6 mr-3" />
                          Kirim Pesan
                        </div>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            {/* Contact Methods */}
            <div>
              <h3 className="text-3xl font-black mb-8" style={{ color: '#018f43' }}>Informasi Kontak</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index}>
                      {info.isMap ? (
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: info.color }}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-lg mb-1" style={{ color: '#018f43' }}>{info.title}</h4>
                              <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                              <p className="text-gray-700 font-medium break-words leading-relaxed mb-3 text-sm">{info.displayValue}</p>
                              <button
                                onClick={() => setShowMapModal(true)}
                                className="inline-flex items-center px-4 py-2 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-md text-sm hover:scale-105"
                                style={{ backgroundColor: '#018f43' }}
                              >
                                <MapPin className="w-4 h-4 mr-2" />
                                Lihat Peta
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: info.color }}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-lg mb-1 group-hover:text-green-600 transition-colors duration-300" style={{ color: '#018f43' }}>{info.title}</h4>
                              <p className="text-sm text-gray-500 mb-2">{info.description}</p>
                              <div className="flex items-center justify-between">
                                <p className="font-bold transition-colors duration-200 break-words hover:underline text-sm" style={{ color: '#018f43' }}>
                                  {info.displayValue}
                                </p>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-black text-2xl mb-6" style={{ color: '#018f43' }}>Media Sosial</h4>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <div className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center mr-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-800 group-hover:text-green-600 transition-colors duration-300">{social.label}</div>
                        <div className="text-gray-600 font-medium text-sm">{social.username}</div>
                      </div>
                      <div className="flex items-center font-bold text-sm" style={{ color: '#018f43' }}>
                        <span className="mr-2">Follow</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Google Maps Modal */}
            {showMapModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                  <div className="p-6 text-white" style={{ backgroundColor: '#018f43' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 mr-3" />
                        <div>
                          <h4 className="font-black text-xl">Lokasi Teras Kebinekaan</h4>
                          <p className="text-green-100">Bogor, Jawa Barat</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowMapModal(false)}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h5 className="font-black text-gray-800 mb-2">Alamat Lengkap:</h5>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        HP52+MW6, Jl. Mutiara II, Bojong Sempu, Kec. Parung, Kabupaten Bogor, Jawa Barat 16330
                      </p>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.635544297982!2d106.7022691!3d-6.4408259999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7003a423065%3A0xeebefbbc9aa7bf31!2sTERAS%20KEBINEKAAN!5e0!3m2!1sen!2sid!4v1754828301635!5m2!1sen!2sid" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }}
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <a
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.635544297982!2d106.7022691!3d-6.4408259999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7003a423065%3A0xeebefbbc9aa7bf31!2sTERAS%20KEBINEKAAN!5e0!3m2!1sen!2sid!4v1754828301635!5m2!1sen!2sid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 text-white font-black rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                        style={{ backgroundColor: '#018f43' }}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Buka di Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;