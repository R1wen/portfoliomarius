import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">À PROPOS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              BASSAH DOTSE K. Marius est un consultant international spécialisé en stratégie, communication et développement. Il accompagne les dirigeants, institutions et organisations publiques et privées dans leurs projets stratégiques.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Grâce à une approche rigoureuse et stratégique, il aide ses clients à atteindre leurs positionnements, leur influence et leur performance, aussi bien en Afrique qu'en Europe.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
            <p className="text-sm text-gray-500 text-center">Photo professionnelle</p>
          </div>
        </div>
      </div>
    </section>
  );
};
