import { PenTool, Layout, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

type HeroProps = {
  data: {
    name: string;
    role: string;
    description: string[];
    tags: string[];
  }
};

export const HeroSection = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden py-20 lg:py-28">
      
      {/* --- Décoration d'arrière-plan (Cercles subtils) --- */}

      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50/80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10"></div>
      <div className="absolute top-40 left-20 w-4 h-4 bg-blue-200 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ================= COLONNE GAUCHE (Texte) ================= */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Let's Work <br />
                Together to Create <br />
                <span className="text-transparent bg-clip-text bg-blue-600">Wonders with Us</span>
              </h1>
              
              <div className="space-y-4 max-w-lg">
                 {data.description.map((line, index) => (
                    <p key={index} className="text-lg text-gray-500 font-medium leading-relaxed">
                      {line}
                    </p>
                 ))}
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Let's Talk
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Start Project
              </button>
            </div>

            {/* Statistiques (Bas de colonne) */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100 mt-8">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Years <br/> Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">26K</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Projects <br/> Success</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">98%</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Satisfied <br/> Rate</p>
              </div>
            </div>
          </div>

          {/* ================= COLONNE DROITE (Image & Badges) ================= */}
          <div className="relative h-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Conteneur de l'image (Cercle de fond subtil pour l'effet "Aura") */}
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
                {/* Cercle d'aura derrière la tête */}
                {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-100/50 rounded-full blur-2xl -z-10"></div> */}
                <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-b-8 border-r-8 border-gray-50 bg-gray-100">
                    <Image 
                        src="/images/photos/test2.jpg" 
                        alt="Portrait" 
                        fill 
                        className="object-cover object-top hover:scale-105 transition-transform duration-700" 
                    />
                </div>

                {/* --- CAPSULES FLOTTANTES (Badges) --- */}
                
                {/* Badge 1 - Top Right (Illustration) */}
                <div className="absolute top-12 -right-6 lg:-right-12 animate-bounce-slow z-20">
                    <div className="bg-white p-2 pr-6 rounded-full shadow-xl flex items-center gap-3 border border-gray-100">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <PenTool size={18} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">Illustration</span>
                    </div>
                </div>

                {/* Badge 2 - Middle Right (Graphic Design) */}
                <div className="absolute top-1/2 -right-4 lg:-right-8 z-20">
                     <div className="bg-white p-2 pr-6 rounded-full shadow-xl flex items-center gap-3 border border-gray-100">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <Layout size={18} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">Graphic Design</span>
                    </div>
                </div>

                {/* Badge 3 - Bottom Right (Creative Branding) */}
                <div className="absolute bottom-20 -right-2 lg:-right-4 animate-bounce-slow delay-700 z-20">
                     <div className="bg-white p-2 pr-6 rounded-full shadow-xl flex items-center gap-3 border border-gray-100">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                            <Zap size={18} />
                        </div>
                        <span className="font-bold text-gray-700 text-sm">Creative Branding</span>
                    </div>
                </div>

                {/* Lignes de connexion décoratives (Cercles fins) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] border border-blue-100 rounded-full -z-10 opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] border border-dashed border-gray-200 rounded-full -z-20 opacity-40 animate-spin-slow-reverse"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};