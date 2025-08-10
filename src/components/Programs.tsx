import { Users, Heart, BookOpen, Shield, Lightbulb, Handshake, TrendingUp, Award, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      icon: Users,
      title: "Prakarsa Kelompok Sipil",
      description: "Memperbesar gelombang prakarsa kelompok sipil untuk memperkuat toleransi dan keadilan sosial di masyarakat.",
      gradient: "from-[#018f43] to-[#026838]"
    },
    {
      icon: Heart,
      title: "Kepemimpinan Berkhidmat",
      description: "Menyebarkan inspirasi praktik kepemimpinan berkhidmat di tingkat komunitas untuk menciptakan pemimpin yang melayani.",
      gradient: "from-[#ffce00] to-[#ffd700]"
    },
    {
      icon: BookOpen,
      title: "Nilai-Nilai Kebangsaan",
      description: "Menginternalisasi nilai-nilai kebangsaan dan kebinekaan dalam kehidupan bermasyarakat sehari-hari.",
      gradient: "from-[#018f43] to-[#026838]"
    },
    {
      icon: Shield,
      title: "Kapasitas Organisasi",
      description: "Memperkuat kapasitas organisasi masyarakat sipil untuk toleransi, perdamaian, dan harmoni sosial.",
      gradient: "from-[#ffce00] to-[#ffd700]"
    },
    {
      icon: Lightbulb,
      title: "Program Inovatif",
      description: "Mengembangkan program-program inovatif untuk pemberdayaan masyarakat dan pengembangan komunitas.",
      gradient: "from-[#018f43] to-[#026838]"
    },
    {
      icon: Handshake,
      title: "Kolaborasi Strategis",
      description: "Membangun jaringan kolaborasi antar organisasi untuk mencapai tujuan bersama dalam mewujudkan masyarakat yang adil.",
      gradient: "from-[#ffce00] to-[#ffd700]"
    }
  ];

  const stats = [
    { icon: Target, number: "50+", label: "Komunitas Terlibat", color: "#ffce00" },
    { icon: TrendingUp, number: "1000+", label: "Peserta Program", color: "#ffffff" },
    { icon: Award, number: "25+", label: "Mitra Kolaborasi", color: "#ffce00" },
    { icon: Globe, number: "15+", label: "Kota Jangkauan", color: "#ffffff" }
  ];

  return (
    <section id="programs" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#018f43] rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-16 w-40 h-40 bg-[#ffce00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-[#018f43] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-[#ffce00] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#018f43]/10 to-[#ffce00]/10 px-6 py-2 rounded-full border border-[#018f43]/20">
                <div className="w-2 h-2 bg-[#018f43] rounded-full animate-pulse"></div>
                <span className="text-[#018f43] font-medium text-sm">Our Programs & Activities</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#018f43] to-[#026838] bg-clip-text text-transparent">
                Program &
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ffce00] to-[#ffd700] bg-clip-text text-transparent">
                Kegiatan
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#018f43] to-transparent rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffce00] rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-l from-[#ffce00] to-transparent rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Berbagai program dan inisiatif yang kami jalankan untuk mewujudkan 
              <span className="text-[#018f43] font-semibold"> masyarakat yang inklusif</span> dan 
              <span className="text-[#ffce00] font-semibold"> berkeadilan</span>
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              const isYellow = index % 2 === 1;
              
              return (
                <Card key={index} className="group hover:scale-105 transition-all duration-500 border-0 bg-white shadow-lg hover:shadow-2xl relative overflow-hidden">
                  {/* Card Background Pattern */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${program.gradient} rounded-full`}></div>
                  </div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isYellow ? 'text-[#018f43] group-hover:text-[#ffce00]' : 'text-[#018f43] group-hover:text-[#026838]'
                    }`}>
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {program.description}
                    </p>
                    
                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Impact Stats Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#018f43] via-[#01a84d] to-[#026838] rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-16 right-12 w-16 h-16 bg-[#ffce00]/20 rounded-full"></div>
                <div className="absolute bottom-12 left-16 w-20 h-20 border border-white/15 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Stats Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                    <TrendingUp className="w-5 h-5 text-[#ffce00]" />
                    <span className="text-white/90 font-medium">Impact & Achievement</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Dampak Program Kami
                  </h3>
                  <p className="text-white/80 text-lg max-w-2xl mx-auto">
                    Pencapaian nyata dalam membangun masyarakat yang lebih baik dan berkelanjutan
                  </p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <StatIcon className="w-6 h-6" style={{ color: stat.color }} />
                            </div>
                          </div>
                          <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                            {stat.number}
                          </div>
                          <div className="text-white/80 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;