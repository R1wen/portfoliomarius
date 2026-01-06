import { Code2, PenTool, Layers } from 'lucide-react';

type HeroProps = {
  data: {
    name: string;
    role: string;
    description: string[];
    tags: string[];
  }
};

export const HeroSection = ({ data }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden py-24 lg:py-32">
        {/* --- Formes d'arrière-plan plates (Flat Shapes) --- */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[300px] h-[300px] bg-gray-100 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- Colonne Texte (Gauche) --- */}
          <div>
            <span className="block text-blue-600 font-semibold mb-4 tracking-wider uppercase">Hello, I'm</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              {data.name}
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-blue-600 mb-8">
              {data.role}
            </h2>
            <div className="space-y-2 mb-10">
            {data.description.map((line, index) => (
               <p key={index} className="text-xl text-gray-600 leading-relaxed">
                 {line}
               </p>
            ))}
            </div>
            
            {/* Tags style "Pill buttons" */}
            <div className="flex flex-wrap gap-4">
              {data.tags.map((tag, index) => (
                // J'utilise le premier tag comme bouton principal "actif" pour l'exemple
                <span key={index} className={`px-8 py-3 rounded-full font-medium transition-all shadow-sm ${index === 0 ? 'bg-blue-600 text-white shadow-blue-200/50 hover:shadow-md' : 'bg-white text-gray-700 border-2 border-gray-100 hover:border-blue-200'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* --- Colonne Image & Éléments flottants (Droite) --- */}
          <div className="relative hidden lg:block">
            {/* Placeholder pour ta grande image principale */}
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-3xl border-8 border-white shadow-2xl overflow-hidden relative z-20">
                {/* Remplace par <Image ... /> */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Votre Photo Ici</div>
            </div>

            <div className="absolute -top-12 -left-12 bg-white p-4 rounded-2xl shadow-lg z-30 animate-bounce-slow">
                <Code2 className="w-10 h-10 text-blue-500" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-2xl shadow-lg z-30">
                <Layers className="w-8 h-8 text-orange-400" />
            </div>
            <div className="absolute -bottom-8 left-1/4 bg-white p-4 rounded-2xl shadow-lg z-30">
                <PenTool className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};