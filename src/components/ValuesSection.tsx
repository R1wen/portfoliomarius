import React from 'react';

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">VALEURS & VISION</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">VALEURS</h3>
              <p className="text-lg text-gray-700">
                LEADERSHIP, RIGUEUR, EXCELLENCE, ENGAGEMENT, VISION STRATÉGIQUE
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">VISION</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                CONTRIBUER À LA TRANSFORMATION DURABLE DES ORGANISATIONS ET AU DÉVELOPPEMENT STRATÉGIQUE DE L'AFRIQUE ET L'EUROPE, EN PLAÇANT LE LEADERSHIP, LA STRATÉGIE ET L'INNOVATION AU CŒUR DE CHAQUE PROJET.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="w-full aspect-square bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
