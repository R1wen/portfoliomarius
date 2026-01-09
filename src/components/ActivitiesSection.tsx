import React from 'react';
import { Briefcase, Users, Mic, TrendingUp, Globe } from 'lucide-react';

type ActivitiesProps = {
  data: {
    intro: string;
    list: string[];
  }
};

// Mapping des icônes pour chaque activité (à adapter selon tes besoins réels)
const icons = [Briefcase, Users, Mic, TrendingUp, Globe];

export const ActivitiesSection = ({ data }: ActivitiesProps) => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Forme d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-square bg-blue-50/50 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <span className="text-blue-600 font-bold mb-3 md:mb-4 block uppercase tracking-wider text-sm md:text-base">Ce que je fais</span>
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900">Activités Professionnelles</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16">
            {data.intro}
        </p>

        {/* Grille de cartes centrées */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.list.map((activity, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border-2 border-transparent hover:border-blue-100 hover:shadow-xl transition-all group text-center flex flex-col items-center w-full">
                {/* Cercle d'icône */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">{activity}</h3>
                {/* Si tu avais une description courte pour chaque activité, elle irait ici */}
                <p className="text-sm md:text-base text-gray-500">Accompagnement stratégique et opérationnel sur mesure.</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};