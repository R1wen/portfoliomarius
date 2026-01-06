import React from 'react';
import { Briefcase } from 'lucide-react';

type ExperienceProps = {
  items: string[];
};

export const ExperienceSection = ({ items }: ExperienceProps) => {
  // On sépare le premier élément qui semble être une intro
  const [intro, ...experiences] = items;

  return (
    <section id="experience" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Forme décorative */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase">Mon Parcours</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">Expériences Professionnelles</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">{intro}</p>
        </div>

        <div className="relative space-y-8">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-200 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center group">
                {/* Point sur la timeline */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full hidden md:block z-10 group-hover:scale-125 transition-transform"></div>
                
                {/* La Carte */}
                <div className="ml-0 md:ml-20 w-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-800 leading-snug">{exp}</p>
                        {/* Comme on a qu'une string, on ne peut pas séparer date/rôle, mais le design reste propre */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};