import React from 'react';

export const ActivitiesSection = () => {
  const activities = [
    "LE CONSEIL STRATÉGIQUE AUPRÈS D'ENTREPRISES ET D'INSTITUTIONS",
    "ACCOMPAGNEMENT DE LEADERS ET DÉCIDEURS",
    "ANIMATION DE FORMATIONS ET CONFÉRENCES",
    "LE CONSEIL EN PROJETS ET INVESTISSEMENTS",
    "LA PARTICIPATION À DES PROJETS DE DÉVELOPPEMENT À IMPACT"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">ACTIVITÉS PROFESSIONNELLES</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              BASSAH DOTSE K. MARIUS INTERVIENT AUPRÈS DE DIFFÉRENTS ACTEURS PUBLICS ET PRIVÉS À TRAVERS:
            </p>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
