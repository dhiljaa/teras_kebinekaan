import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Camera, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop",
      alt: "Workshop Toleransi dan Keberagaman",
      title: "Workshop Toleransi",
      description: "Membangun pemahaman tentang keberagaman dalam masyarakat",
      date: "15 Januari 2024",
      location: "Jakarta"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=800&fit=crop",
      alt: "Dialog Antarbudaya",
      title: "Dialog Antarbudaya",
      description: "Diskusi terbuka tentang harmoni antar komunitas budaya",
      date: "22 Februari 2024",
      location: "Bandung"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=1200&h=800&fit=crop",
      alt: "Pelatihan Kepemimpinan",
      title: "Pelatihan Kepemimpinan",
      description: "Mengembangkan leader yang berkhidmat untuk masyarakat",
      date: "10 Maret 2024",
      location: "Surabaya"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop",
      alt: "Kegiatan Komunitas",
      title: "Kegiatan Komunitas",
      description: "Penguatan kapasitas organisasi masyarakat sipil",
      date: "5 April 2024",
      location: "Yogyakarta"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=800&fit=crop",
      alt: "Seminar Kebinekaan",
      title: "Seminar Kebinekaan",
      description: "Internalisasi nilai-nilai kebangsaan dalam kehidupan",
      date: "18 Mei 2024",
      location: "Medan"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=800&fit=crop",
      alt: "Festival Keberagaman",
      title: "Festival Keberagaman",
      description: "Perayaan keberagaman budaya Indonesia",
      date: "25 Juni 2024",
      location: "Bali"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-yellow-50/20">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#018f43] rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-16 w-32 h-32 bg-[#ffce00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-[#018f43] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#018f43]/10 to-[#ffce00]/10 px-6 py-3 rounded-full border border-[#018f43]/20 mb-6">
              <Camera className="w-5 h-5 text-[#018f43]" />
              <span className="text-[#018f43] font-medium">Our Gallery</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#018f43] to-[#026838] bg-clip-text text-transparent">
                Galeri 
              </span>
              <span className="bg-gradient-to-r from-[#ffce00] to-[#ffd700] bg-clip-text text-transparent">
                {" "}Kegiatan
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#018f43] to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffce00] rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-[#ffce00] to-transparent rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dokumentasi berbagai kegiatan dan program yang telah kami laksanakan untuk 
              <span className="text-[#018f43] font-semibold"> membangun masyarakat</span> yang lebih baik
            </p>
          </div>

          {/* Main Slider */}
          <div className="relative mb-16">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={image.id} className="min-w-full h-full relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-2 bg-[#018f43]/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4 text-white" />
                              <span className="text-white text-sm">{image.date}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#ffce00]/20 backdrop-blur-sm px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4 text-white" />
                              <span className="text-white text-sm">{image.location}</span>
                            </div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            {image.title}
                          </h3>
                          <p className="text-white/90 text-lg leading-relaxed">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#ffce00] transition-colors" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-[#ffce00] transition-colors" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  {isPlaying ? 
                    <Pause className="w-5 h-5 text-white group-hover:text-[#ffce00] transition-colors" /> :
                    <Play className="w-5 h-5 text-white group-hover:text-[#ffce00] transition-colors ml-0.5" />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails Navigation */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4 overflow-x-auto">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => goToSlide(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                      currentSlide === index 
                        ? 'ring-4 ring-[#018f43] scale-110' 
                        : 'hover:scale-105 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    {currentSlide === index && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#018f43]/50 to-transparent"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-8 bg-gradient-to-r from-[#018f43] to-[#ffce00]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;