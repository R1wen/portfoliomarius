import { Check } from 'lucide-react';
import Image from 'next/image';

type ExpertiseProps = {
  items: { title: string; image: string }[];
};

export const ExpertiseSection = ({ items }: ExpertiseProps) => {
  return (
    <section id="expertise" className="py-12 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
             <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm">Savoir-faire</span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 md:mt-3 font-serif">Domaines d'Expertise</h2>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-blue-600 mx-auto mt-4 md:mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((expertise, index) => (
            <div key={index} className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col w-full">
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10 duration-500"></div>
                     <Image 
                        src={expertise.image} 
                        alt={expertise.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
                             <span className="text-base md:text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                                 {index + 1}
                             </span>
                        </div>
                    </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative">
                     <div className="absolute -top-5 md:-top-6 left-6 md:left-8 bg-blue-600 text-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300 z-20">
                        <Check className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <div className="mt-4 md:mt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {expertise.title}
                        </h3>
                         <div className="w-12 h-1 bg-gray-200 mt-3 md:mt-4 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};