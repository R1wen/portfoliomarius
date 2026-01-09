import { 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Building2, 
  Award, 
  Users, 
  Lightbulb, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

type ExperienceProps = {
  items: string[];
};

export const ExperienceSection = ({ items }: ExperienceProps) => {
  const [intro, ...experiences] = items;

  const styles = [
    { icon: Award, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200" },
    { icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { icon: Building2, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
    { icon: MapPin, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
    { icon: Globe, color: "text-green-600", bg: "bg-green-50", border: "border-green-200" },
    { icon: Users, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
    { icon: Briefcase, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
    { icon: Lightbulb, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200" },
    { icon: CheckCircle2, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-200" },
  ];

  return (
    <section id="experience" className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-50/50 rounded-full translate-y-1/2 -translate-x-1/4 -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm md:text-base">Mon Parcours</span>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">Expériences Professionnelles</h2>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto border-b-2 border-blue-100 pb-6 md:pb-8">{intro}</p>
        </div>

        <div className="relative">
            <div className="hidden sm:block absolute left-6 md:left-8 lg:left-12 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const style = styles[index % styles.length];
              const IconComponent = style.icon;

              return (
                <div key={index} className="relative flex flex-row items-center sm:block group">
                  <div className={`
                    relative sm:absolute 
                    sm:left-6 md:left-8 lg:left-12 
                    sm:-translate-x-1/2 
                    shrink-0 
                    mr-4 sm:mr-0
                    w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 
                    rounded-full border-2 md:border-4 border-white shadow-md 
                    flex items-center justify-center z-10 
                    transition-transform duration-300 group-hover:scale-110 
                    ${style.bg}
                  `}>
                    <IconComponent className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ${style.color}`} />
                  </div>

                  {/* Petit connecteur horizontal (Desktop uniquement) */}
                  <div className="hidden md:block absolute left-12 w-12 h-0.5 bg-gray-200 group-hover:bg-blue-400 transition-colors"></div>

                  {/* --- CARTE DE CONTENU --- */}
                  {/* Changement majeur ici :
                      - Sur mobile : ml-0 (collé au flux normal après l'icone)
                      - Sur desktop (sm+) : ml-20 (laisse la place à l'icone absolue)
                  */}
                  <div className="ml-0 sm:ml-20 md:ml-32 w-full">
                    <div className={`p-4 md:p-6 lg:p-8 bg-white border rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 ${style.border} group-hover:border-transparent`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                        <p className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                            {exp}
                        </p>
                        <div className={`hidden md:flex w-8 h-8 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${style.bg}`}>
                            <div className={`w-2 h-2 rounded-full ${style.color.replace('text-', 'bg-')}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
        </div>
      </div>
    </section>
  );
};