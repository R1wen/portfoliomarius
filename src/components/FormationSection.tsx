import React from 'react';

export const FormationSection = () => {
  const formations = [
    "MARIUS POSSÈDE UNE SOLIDE FORMATION ACADÉMIQUE ORIENTÉE VERS LE MANAGEMENT, LA STRATÉGIE ET LE DÉVELOPPEMENT INTERNATIONAL",
    "MASTER EN AFFAIRES INTERNATIONALES (SCIENCES PO PARIS)",
    "LICENCE EN DROIT",
    "MASTER EN MARKETING ET COMMUNICATION",
    "CERTIFICATION EN GESTION (ISM)",
    "FORMATEUR CERTIFIÉ FRANCE COMPÉTENCES",
    "ÉTUDES RÉALISÉES À PARIS (FRANCE), ROYAUME-UNI, DAKAR (SÉNÉGAL), ABIDJAN (CÔTE D'IVOIRE) ET STRATÉGIE"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">PARCOURS & FORMATION</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {formations.map((formation, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{formation}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
