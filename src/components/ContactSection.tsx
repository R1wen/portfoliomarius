import React from 'react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-1 bg-blue-600"></div>
          <h2 className="text-5xl font-bold">WORK WITH ME</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <p className="text-xl">marius@innovaskolar.fr</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <p className="text-sm text-gray-400 mb-2">Téléphone</p>
              <p className="text-xl">+17(480)315</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <p className="text-sm text-gray-400 mb-2">Site web</p>
              <p className="text-xl">INOVAkarim.com/mabassadotse.com</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <p className="text-sm text-gray-400 mb-2">Localisation</p>
              <p className="text-xl">Afrique - Europe</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-white/5 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
