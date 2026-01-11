import { PenTool, Layout, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  data: {
    name: string;
    role: string;
    description: string[];
    tags: string[];
  };
};

export const HeroSection = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-20 pb-12 md:pt-28 md:pb-28">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Texte */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Badge dispo */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-xs font-bold uppercase tracking-wider animate-fade-in-up hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Disponible pour collaboration
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
              Créons des <br />
              <span className="relative inline-block text-blue-600">
                merveilles
                <svg
                  className="absolute w-full h-4 -bottom-1 left-0 text-blue-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              ensemble.
            </h1>

            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {data.description.map((line, index) => (
                <p
                  key={index}
                  className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-base shadow-xl shadow-gray-200 hover:bg-blue-600 hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                <a href="https://eliteschool.pro" target="_blank"><span className="relative z-10">Fondateur ELITESCHOOL</span></a>  
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-600/10"></div>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-semibold text-gray-400">
              {["Strategie", "Developpement", "Croissance"].map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Stats */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-100 mx-auto aspect-4/5 group">

              <div className="relative w-full h-full rounded-[2.5rem] rounded-tr-[8rem] rounded-bl-[8rem] overflow-hidden border-4 border-white shadow-2xl z-10 bg-gray-100 transition-all duration-500 group-hover:rounded-4xl">
                <Image
                  src="/images/photos/photo2.webp"
                  alt="Portrait"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Stats flottantes */}
              <div className="absolute -bottom-6 left-6 right-6 z-30">
                <div className="bg-white/90 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="flex justify-between items-center divide-x divide-gray-200/50">
                    <div className="text-center px-2 flex-1">
                      <p className="text-xl md:text-2xl font-black text-gray-900">
                        15+
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
                        Années d'expérience
                      </p>
                    </div>
                    <div className="text-center px-2 flex-1">
                      <p className="text-xl md:text-2xl font-black text-gray-900">
                        26K
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
                        Projets réalisés
                      </p>
                    </div>
                    <div className="text-center px-2 flex-1">
                      <p className="text-xl md:text-2xl font-black text-gray-900">
                        98%
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
                        Clients satisfaits
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icônes flottantes */}
              <div className="absolute top-12 -right-6 animate-bounce-slow z-20">
                <div className="bg-gray-900 p-3 rounded-2xl shadow-xl flex items-center justify-center text-white rotate-6 hover:rotate-12 transition-transform">
                  <PenTool size={20} />
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20">
                <div className="bg-blue-600 p-3 rounded-2xl shadow-xl flex items-center justify-center text-white -rotate-6 hover:-rotate-12 transition-transform">
                  <Layout size={20} />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full rounded-[2.5rem] rounded-tr-[8rem] rounded-bl-[8rem] border-2 border-blue-600/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
