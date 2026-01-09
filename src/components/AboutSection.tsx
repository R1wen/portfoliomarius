import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react'; // Icône pour le badge

type AboutProps = {
  data: {
    paragraphs: string[];
  }
};

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            
          {/* --- Colonne Images --- */}
          <div className="relative order-2 lg:order-1 min-h-[400px] md:min-h-[500px]">
            <div className="w-3/4 md:w-4/5 aspect-3/4 bg-gray-200 rounded-2xl md:rounded-3xl shadow-2xl border-4 md:border-8 border-white relative z-10 ml-auto max-w-[350px] md:max-w-none">
                <Image src="/images/photos/test3.jpg" alt="Hero" fill className="object-cover rounded-2xl md:rounded-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 md:w-3/5 aspect-square bg-gray-300 rounded-2xl md:rounded-3xl shadow-xl border-4 md:border-8 border-white z-20 -mb-6 md:-mb-12 -ml-3 md:-ml-6 max-w-[250px] md:max-w-none">
                <Image src="/images/photos/test1.jpg" alt="Hero" fill className="object-cover rounded-2xl md:rounded-3xl" />
            </div>
            
            <div className="absolute top-1/4 left-0 md:left-0 bg-white p-3 md:p-4 pr-4 md:pr-8 rounded-r-full shadow-lg z-30 flex items-center gap-2 md:gap-4 animate-pulse-slow">
                <div className="bg-blue-100 p-1.5 md:p-2 rounded-full shrink-0">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div>
                    <p className="text-lg md:text-2xl font-bold text-gray-900">15+ Ans</p>
                    <p className="text-xs md:text-sm text-gray-500 font-medium">d'Expérience</p>
                </div>
            </div>
          </div>

          {/* --- Colonne Texte --- */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-blue-600 font-bold mb-3 md:mb-4 block uppercase tracking-wider text-sm md:text-base">À Propos de moi</span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 text-gray-900 leading-tight">
              Je conçois des stratégies <br className="hidden sm:block" /> <span className="text-blue-600">qui transforment.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
              {data.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};