import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Target, Heart, BookOpen, Sparkles, Award, Globe, Shield } from 'lucide-react';

// Mock image - replace with actual image import
const aboutImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";

const About = () => {
  const [showFullProfile, setShowFullProfile] = useState(false);

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-pulse" 
             style={{background: 'radial-gradient(circle, #018f43 0%, transparent 70%)'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 animate-bounce" 
             style={{background: 'radial-gradient(circle, #ffce00 0%, transparent 70%)', animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full animate-ping" 
             style={{backgroundColor: '#ffce00'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full animate-ping delay-1000" 
             style={{backgroundColor: '#018f43'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Modern Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl border border-white"
                     style={{backgroundColor: '#018f43'}}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse" 
                     style={{backgroundColor: '#ffce00'}}></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tight">
                Tentang 
                <span style={{color: '#ffce00'}}>Kami</span>
              </h2>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-0.5" style={{backgroundColor: '#018f43'}}></div>
                <Sparkles className="w-6 h-6" style={{color: '#ffce00'}} />
                <div className="w-16 h-0.5" style={{backgroundColor: '#018f43'}}></div>
              </div>
              
              <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
                Organisasi Non-Pemerintah untuk 
                <span className="font-semibold" style={{color: '#ffce00'}}> Kebinekaan Indonesia</span>
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Enhanced Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <img 
                  src={aboutImage} 
                  alt="Tim Teras Kebinekaan" 
                  className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-all duration-1000"
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="rounded-2xl p-6 border border-white bg-white shadow-lg">
                    <div className="flex items-center space-x-3 text-black">
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#018f43'}}></div>
                      <span className="font-semibold">Aktif sejak 2022</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modern Floating Elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-3xl opacity-20 animate-float"
                   style={{backgroundColor: '#ffce00'}}></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl opacity-30 animate-float delay-1000"
                   style={{backgroundColor: '#018f43'}}></div>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center rounded-full px-6 py-3 mb-8 border border-white shadow-lg"
                     style={{backgroundColor: '#018f43'}}>
                  <Heart className="w-5 h-5 mr-3 text-white" />
                  <span className="text-white font-medium">Didirikan 23 November 2022</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                  Membangun Jembatan
                  <br />
                  <span style={{color: '#ffce00'}}>Kebinekaan</span>
                </h3>
                
                <p className="text-xl text-black leading-relaxed mb-6">
                  Di tengah arus perubahan sosial yang dinamis, 
                  <span className="font-bold" style={{color: '#018f43'}}> Teras Kebinekaan</span> hadir sebagai rumah bagi keberagaman dan inklusi sosial. Kami mengusung semangat kebersamaan, toleransi, dan keadilan sosial.
                </p>

                <p className="text-lg text-black leading-relaxed mb-10 opacity-80">
                  Harmoni sosial harus diperjuangkan, bukan sekadar diperbincangkan. Melalui berbagai program inovatif, kami membangun masa depan Indonesia yang lebih inklusif.
                </p>
              </div>

              {/* Modern Key Values */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="group bg-white p-8 rounded-3xl border border-white shadow-lg transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                       style={{backgroundColor: '#018f43'}}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">Inklusif</h4>
                  <p className="text-black opacity-70">Mewujudkan masyarakat yang inklusif dan toleran untuk semua</p>
                </div>
                
                <div className="group bg-white p-8 rounded-3xl border border-white shadow-lg transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                       style={{backgroundColor: '#ffce00'}}>
                    <BookOpen className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">Edukatif</h4>
                  <p className="text-black opacity-70">Mendiseminasi nilai-nilai kebinekaan melalui pendidikan</p>
                </div>
              </div>

              {/* Modern CTA Button */}
              <button
                onClick={() => setShowFullProfile(!showFullProfile)}
                className="group relative inline-flex items-center px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 transform hover:scale-105 border border-white shadow-lg"
                style={{backgroundColor: '#018f43'}}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{backgroundColor: '#ffce00'}}></div>
                <span className="relative z-10 mr-3">
                  {showFullProfile ? 'Lihat Lebih Sedikit' : 'Lihat Profil Lengkap'}
                </span>
                {showFullProfile ? (
                  <ChevronUp className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                ) : (
                  <ChevronDown className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                )}
              </button>
            </div>
          </div>

          {/* Modern Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "2+", label: "Tahun Berdiri", icon: Award, color: '#018f43' },
              { number: "100+", label: "Kegiatan Terlaksana", icon: Sparkles, color: '#ffce00' },
              { number: "1000+", label: "Masyarakat Terjangkau", icon: Users, color: '#018f43' },
              { number: "50+", label: "Mitra Kolaborasi", icon: Globe, color: '#ffce00' }
            ].map((stat, index) => (
              <div key={index} className="group text-center bg-white p-8 rounded-3xl border border-white shadow-lg transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:animate-pulse"
                     style={{backgroundColor: stat.color}}>
                  <stat.icon className={`w-8 h-8 ${stat.color === '#ffce00' ? 'text-black' : 'text-white'}`} />
                </div>
                <div className="text-4xl font-black text-black mb-2">{stat.number}</div>
                <div className="text-black font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Full Profile Section */}
          {showFullProfile && (
            <div className="bg-white rounded-3xl border border-white shadow-xl p-8 md:p-12 animate-in slide-in-from-top duration-700">
              <div className="max-w-none">
                <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-black text-black mb-4">
                    Profil Lengkap 
                    <span style={{color: '#ffce00'}}>Teras Kebinekaan</span>
                  </h3>
                  <div className="w-32 h-1 mx-auto mt-6" 
                       style={{background: `linear-gradient(90deg, #018f43 0%, #ffce00 100%)`}}></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                  {/* Visi */}
                  <div className="group">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                           style={{backgroundColor: '#018f43'}}>
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-3xl font-bold text-black">Visi Kami</h4>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-white shadow-lg transition-all duration-500 group-hover:shadow-xl"
                         style={{backgroundColor: 'rgba(1, 143, 67, 0.05)'}}>
                      <p className="text-black leading-relaxed text-lg">
                        TERAS KEBINEKAAN diorientasikan sebagai lembaga yang berkontribusi aktif untuk mewujudkan masyarakat yang inklusif, toleran, setara serta mampu membangun kerjasama dengan berbagai pihak, dalam proses penguatan tata kebinekaan untuk Indonesia yang berkeadilan.
                      </p>
                    </div>
                  </div>

                  {/* Misi */}
                  <div className="group">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                           style={{backgroundColor: '#ffce00'}}>
                        <BookOpen className="w-6 h-6 text-black" />
                      </div>
                      <h4 className="text-3xl font-bold text-black">Misi Kami</h4>
                    </div>
                    <div className="space-y-6">
                      {[
                        "Memperbesar gelombang prakarsa kelompok-kelompok sipil dalam merawat kebinekaan",
                        "Memperluas inspirasi praktek-praktek kepemimpinan yang berkhidmat pada kemanusiaan",
                        "Menginternalisasi pemikiran dan nilai-nilai cendekiawan bangsa",
                        "Memperkuat kapasitas organisasi berbasis agama dan pendidikan"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                          <div className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"
                               style={{backgroundColor: '#ffce00'}}></div>
                          <p className="text-black text-lg leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Filosofi & Nilai */}
                <div className="bg-white p-10 rounded-2xl border border-white shadow-lg mb-12"
                     style={{backgroundColor: 'rgba(255, 206, 0, 0.05)'}}>
                  <div className="flex items-center mb-8">
                    <Shield className="w-8 h-8 mr-4" style={{color: '#ffce00'}} />
                    <h4 className="text-3xl font-bold text-black">Filosofi & Nilai</h4>
                  </div>
                  
                  <div className="space-y-8 text-lg">
                    <p className="text-black leading-relaxed">
                      Sejak awal didirikan, Teras Kebinekaan hadir dengan satu keyakinan: 
                      <span className="font-bold" style={{color: '#018f43'}}> harmoni sosial harus diperjuangkan, bukan sekadar diperbincangkan</span>. 
                      Melalui berbagai program, kami menanamkan nilai-nilai moralitas universal berbasis ajaran agama yang inklusif, serta mendorong penguatan civil society.
                    </p>
                    
                    <p className="text-black leading-relaxed">
                      Kami mewujudkan ruang-ruang publik yang inklusif, dengan menjadikan 
                      <span className="font-bold" style={{color: '#ffce00'}}> Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika</span> 
                      sebagai pilar dan nilai fundamental berbangsa dan bernegara. Pancasila harus diterjemahkan ke dalam format yang lebih konkrit sehingga prinsip "Keadilan sosial bagi seluruh rakyat Indonesia" benar-benar menjadi kenyataan.
                    </p>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="text-center bg-white p-12 rounded-2xl border border-white shadow-lg"
                     style={{background: `linear-gradient(135deg, rgba(1, 143, 67, 0.05) 0%, rgba(255, 206, 0, 0.05) 100%)`}}>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                       style={{background: `linear-gradient(135deg, #018f43 0%, #ffce00 100%)`}}>
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <blockquote className="text-2xl md:text-3xl italic text-black mb-6 font-light">
                    "Kebinekaan bukanlah tantangan, melainkan anugerah yang harus kita rawat bersama."
                  </blockquote>
                  <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
                    Ini semua merupakan modal yang sangat besar untuk membangun toleransi, menjalin persaudaraan, bekerja sama dengan berbagai pihak, baik intra dan antar-agama, untuk membangun Indonesia yang lebih baik di masa depan.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float.delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;