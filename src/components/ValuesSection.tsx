import React from 'react';
import { Gem, Target } from 'lucide-react';

type ValuesProps = {
  data: {
    valuesList: string;
    visionText: string;
  }
};

export const ValuesSection = ({ data }: ValuesProps) => {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Formes d'arrière-plan abstraites */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
             <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Bloc Valeurs */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 rotate-3">
                <Gem className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Nos Valeurs</h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light border-l-2 border-blue-600 pl-6">
                {data.valuesList}
            </p>
          </div>

            {/* Bloc Vision */}
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 -rotate-3">
                <Target className="text-blue-900 w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Notre Vision</h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light border-l-2 border-white pl-6">
              {data.visionText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};