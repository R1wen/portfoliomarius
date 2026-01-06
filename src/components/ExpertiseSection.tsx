import React from 'react';
import { Check } from 'lucide-react';

type ExpertiseProps = {
  items: { title: string }[];
};

export const ExpertiseSection = ({ items }: ExpertiseProps) => {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
             <span className="text-blue-600 font-bold tracking-wider uppercase">Savoir-faire</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">Domaines d'Expertise</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((expertise, index) => (
            <div key={index} className="group p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-600 hover:bg-blue-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-6xl font-bold text-gray-100 group-hover:text-blue-500/30 transition-colors select-none">
                        0{index + 1}
                    </span>
                </div>
              <p className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors">
                  {expertise.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};