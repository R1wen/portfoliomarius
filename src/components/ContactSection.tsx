import React from 'react';
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
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-blue-600 rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-16 text-white text-center relative overflow-hidden">
            {/* Cercles déco */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 lg:mb-8">Prêt à collaborer ?</h2>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-10 lg:mb-12 px-4">
                    Transformons vos idées en projets concrets.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
                    {/* Carte Email */}
                    <div className="bg-white/10 backdrop-blur p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors w-full">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Email</p>
                        <p className="font-medium text-sm md:text-base break-all">{data.email}</p>
                    </div>

                    {/* Carte Phone */}
                    <div className="bg-white/10 backdrop-blur p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors w-full">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Téléphone</p>
                        <p className="font-medium text-sm md:text-base break-all">{data.phone}</p>
                    </div>

                    {/* Carte Site */}
                    <div className="bg-white/10 backdrop-blur p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors w-full">
                        <Globe className="w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Site Web</p>
                        <p className="font-medium text-sm md:text-base break-all">{data.website}</p>
                    </div>

                    {/* Carte Location */}
                    <div className="bg-white/10 backdrop-blur p-5 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors w-full">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 mb-3 md:mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Localisation</p>
                        <p className="font-medium text-sm md:text-base break-all">{data.location}</p>
                    </div>
                </div>

                <div className="mt-10 md:mt-14 lg:mt-16">
                     <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
                        Me contacter maintenant <ArrowRight size={18} className="md:w-5 md:h-5" />
                     </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};