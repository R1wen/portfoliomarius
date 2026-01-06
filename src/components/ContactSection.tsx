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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
            {/* Cercles déco */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Prêt à collaborer ?</h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12">
                    Transformons vos idées en projets concrets.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {/* Carte Email */}
                    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-colors">
                        <Mail className="w-6 h-6 mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Email</p>
                        <p className="font-medium truncate">{data.email}</p>
                    </div>

                    {/* Carte Phone */}
                    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-colors">
                        <Phone className="w-6 h-6 mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Téléphone</p>
                        <p className="font-medium truncate">{data.phone}</p>
                    </div>

                    {/* Carte Site */}
                    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-colors">
                        <Globe className="w-6 h-6 mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Site Web</p>
                        <p className="font-medium truncate">{data.website}</p>
                    </div>

                    {/* Carte Location */}
                    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition-colors">
                        <MapPin className="w-6 h-6 mb-4" />
                        <p className="text-xs text-blue-200 uppercase font-bold tracking-wider mb-1">Localisation</p>
                        <p className="font-medium truncate">{data.location}</p>
                    </div>
                </div>

                <div className="mt-16">
                     <a href={`mailto:${data.email}`} className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                        Me contacter maintenant <ArrowRight size={20} />
                     </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};