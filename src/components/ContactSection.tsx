import { Mail, Phone, Globe, MapPin, ArrowRight } from 'lucide-react';

type ContactProps = {
  data: {
    email: string;
    phone: string;
    website: string;
    location: string;
  }
};

export const ContactSection = ({ data }: ContactProps) => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="items-center"> {/* grid lg:grid-cols-2 gap-12 lg:gap-20 */}
            
            <div className="space-y-8">
                <div className='text-center'> {/* lg:text-left */}
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        Commencez une <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Collaboration</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed mx-auto lg:mx-0"> {/* max-w-lg */}
                        Vous avez un projet en tête ou simplement envie d'échanger ? <br/> Je suis toujours à l'écoute de nouvelles opportunités.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <a href={`mailto:${data.email}`} className="group flex items-center gap-6 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Envoyez un email</p>
                            <p className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{data.email}</p>
                        </div>
                        <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </a>

                    <a href="#contact" className="group flex items-center gap-6 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Appelez-moi</p>
                            <p className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{data.phone}</p>
                        </div>
                        <ArrowRight className="ml-auto text-gray-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                    </a>
                </div>
                
                <div className="pt-8 border-t border-gray-200 grid grid-cols-2 gap-8">
                     <div className=''>
                        <div className="flex items-center gap-2 mb-2 text-gray-900 font-bold">
                             <MapPin size={18} className="text-gray-400" /> Localisation
                        </div>
                        <p className="text-gray-600">{data.location}</p>
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-2 text-gray-900 font-bold">
                             <Globe size={18} className="text-gray-400" /> Réseaux
                        </div>
                         <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/marius-bassah-developpemntcommercialafriquesubsaharienne/" target='_blank' className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                     </div>
                </div>
            </div>

            {/* <div className="relative">
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                         <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
                             <MessageSquare size={20} />
                         </div>
                         <div>
                             <h3 className="text-xl font-bold text-gray-900">Envoyez un message</h3>
                             <p className="text-sm text-gray-500">Réponse sous 24 heures</p>
                         </div>
                    </div>

                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4 text-black">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Nom complet</label>
                                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                                <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Sujet</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-600">
                                <option>Projet de collaboration</option>
                                <option>Consulting / Conseil</option>
                                <option>Conférence / Intervention</option>
                                <option>Autre demande</option>
                            </select>
                        </div>

                        <div className="space-y-2 text-black">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                            <textarea rows={4} placeholder="Décrivez votre projet ici..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"></textarea>
                        </div>

                        <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-blue-600 hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                            Envoyer le message <Send size={18} />
                        </button>
                    </form>
                </div>
                
                <div className="absolute top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-[60px] opacity-40 z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-20 z-0"></div>
            </div> */}
        </div>

      </div>
    </section>
  );
};