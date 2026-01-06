import React from 'react';

export const ExperienceSection = () => {
  const experiences = [
    "UNE SOLIDE EXPÉRIENCE EN MANAGEMENT STRATÉGIE, INNOVATION ET DÉVELOPPEMENT DE PROJETS À L'INTERNATIONAL",
    "RESPONSABLE NÉGOCIATION INVESTISSEMENT - INCUBATEUR AFRICANPIONEER",
    "RESPONSABLE IT & MARKETING/VENTES - GROUPE INNOV ECLAIR",
    "CHARGÉ DE MISSION AU TOGO",
    "RESPONSABLE DE PROJET - GUINÉE",
    "RESPONSABLE DÉVELOPPEMENT OPÉRATIONS - AFRIQUE",
    "PROPRIÉTÉS - INNOV'AKIM BUSINESS",
    "ASSOCIÉ FONDATEUR - INNOVASKOLA.RS",
    "CONSEILLER MUNICIPAL - MAIRIE DE GRISY FRANCE"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">EXPÉRIENCES PROFESSIONNELLES</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-300 pl-6 py-2 hover:border-blue-600 transition-colors">
                <p className="text-gray-700">{exp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
