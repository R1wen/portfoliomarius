import React from 'react';
import { CheckCircle2 } from 'lucide-react'; // Icône pour le badge

type AboutProps = {
  data: {
    paragraphs: string[];
  }
};

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
          {/* --- Colonne Images (Collage) --- */}
          <div className="relative">
            {/* Image Principale */}
            <div className="w-4/5 aspect-[3/4] bg-gray-200 rounded-3xl shadow-2xl border-8 border-white relative z-10 ml-auto">
                {/* <Image src="..." /> */}
            </div>
            {/* Image Secondaire (superposée) */}
            <div className="absolute bottom-0 left-0 w-3/5 aspect-square bg-gray-300 rounded-3xl shadow-xl border-8 border-white z-20 -mb-12 -ml-6">
                 {/* <Image src="..." /> */}
            </div>
            
            {/* Badge Flottant "Succès/Expérience" */}
            <div className="absolute top-1/4 left-0 bg-white p-4 pr-8 rounded-r-full shadow-lg z-30 flex items-center gap-4 animate-pulse-slow">
                <div className="bg-blue-100 p-2 rounded-full">
                    <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">15+ Ans</p>
                    <p className="text-sm text-gray-500 font-medium">d'Expérience</p>
                </div>
            </div>
          </div>

          {/* --- Colonne Texte --- */}
          <div>
            <span className="text-blue-600 font-bold mb-4 block uppercase tracking-wider">À Propos de moi</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
              Je conçois des stratégies <br/> <span className="text-blue-600">qui transforment.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              {data.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                Télécharger mon CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};