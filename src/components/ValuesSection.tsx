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
    <section className="py-12 md:py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Petites formes en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-10 right-4 md:right-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
             <div className="absolute bottom-10 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            
            {/* Les Valeurs */}
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 rotate-3">
                <Gem className="text-white w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Nos Valeurs</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light border-l-2 border-blue-600 pl-4 md:pl-6">
                {data.valuesList}
            </p>
          </div>

            {/* La Vision */}
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
             <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 -rotate-3">
                <Target className="text-blue-900 w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Notre Vision</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light border-l-2 border-white pl-4 md:pl-6">
              {data.visionText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};