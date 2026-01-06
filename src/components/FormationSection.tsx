import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

type FormationProps = {
  items: string[];
};

export const FormationSection = ({ items }: FormationProps) => {
  const [intro, ...formations] = items;

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Colonne Gauche : Titre et Intro */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-blue-600 font-bold text-sm shadow-sm mb-6">
                    <GraduationCap size={18} />
                    <span>Académique</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                    Parcours & <br/> <span className="text-blue-600">Formation</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {intro}
                </p>
                {/* Élément visuel abstrait */}
                <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
            </div>

            {/* Colonne Droite : Grille de cartes */}
            <div className="grid gap-4">
                {formations.map((formation, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md hover:translate-x-2 transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                        <div className="shrink-0">
                            <Award className="w-8 h-8 text-blue-200" />
                        </div>
                        <p className="text-gray-700 font-medium">{formation}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};