import { Target, CheckCircle, Heart, Shield, Users, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden bg-gradient-to-br from-[#018f43] via-[#01a84d] to-[#026838]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/15 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#ffce00]/20 rounded-full"></div>
        <div className="absolute bottom-32 right-12 w-14 h-14 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Values Section */}
          <div className="mt-16">
            <div className="text-center mb-16">
              <div className="inline-block p-1 rounded-full bg-gradient-to-r from-white/20 to-[#ffce00]/20 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white/80 text-sm font-medium">Our Core Values</span>
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Nilai-Nilai Kami
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#ffce00] to-white mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Toleransi", 
                  desc: "Menghargai keberagaman dalam perbedaan",
                  icon: Heart,
                  color: "from-[#ffce00] to-[#ffd700]"
                },
                { 
                  title: "Keadilan", 
                  desc: "Memperjuangkan hak yang setara untuk semua",
                  icon: Shield,
                  color: "from-white to-gray-100"
                },
                { 
                  title: "Inklusivitas", 
                  desc: "Membuka ruang partisipasi bagi seluruh masyarakat",
                  icon: Users,
                  color: "from-[#ffce00] to-[#ffd700]"
                },
                { 
                  title: "Gotong Royong", 
                  desc: "Membangun kekuatan melalui kebersamaan",
                  icon: Handshake,
                  color: "from-white to-gray-100"
                }
              ].map((value, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-500 border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 shadow-xl hover:shadow-2xl">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <value.icon className="w-10 h-10 text-[#018f43]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffce00] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {value.desc}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffce00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Decoration */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 text-white/60">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
                <div className="w-2 h-2 bg-[#ffce00] rounded-full"></div>
                <div className="w-16 h-px bg-gradient-to-r from-white/40 to-white/40"></div>
                <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;