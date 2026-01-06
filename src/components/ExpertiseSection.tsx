import React from 'react';

export const ExpertiseSection = () => {
  const expertises = [
    { title: "Stratégies de développement international", color: "blue" },
    { title: "Stratégie d'entreprise", color: "blue" },
    { title: "Communication stratégique et influence", color: "blue" },
    { title: "Accompagnement de développement de dirigeants", color: "blue" },
    { title: "Personal branding professionnel", color: "blue" },
    { title: "Leadership et prise de décision", color: "blue" },
    { title: "Structuration de projets institutionnels et entrepreneuriaux", color: "blue" }
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">DOMAINES D'EXPERTISE</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {expertises.map((expertise, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600">
              <p className="text-gray-800 font-medium">{expertise.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
