import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

type FormationProps = {
  items: string[];
};

export const FormationSection = ({ items }: FormationProps) => {
  const [intro, ...formations] = items;

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Colonne Gauche : Titre et Intro */}
            <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full text-blue-600 font-bold text-xs md:text-sm shadow-sm mb-4 md:mb-6">
                    <GraduationCap size={16} className="md:w-[18px] md:h-[18px]" />
                    <span>Académique</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
                    Parcours & <br className="hidden sm:block" /> <span className="text-blue-600">Formation</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 md:mb-8">
                    {intro}
                </p>
                {/* Élément visuel abstrait */}
                <div className="w-16 md:w-24 h-1.5 md:h-2 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Colonne Droite : Grille de cartes */}
            <div className="grid gap-3 md:gap-4">
                {formations.map((formation, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-md hover:translate-x-1 md:hover:translate-x-2 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600 w-full">
                        <div className="shrink-0">
                            <Award className="w-6 h-6 md:w-8 md:h-8 text-blue-200" />
                        </div>
                        <p className="text-base md:text-lg text-gray-700 font-medium">{formation}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};