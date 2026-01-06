import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/src/layout/Navbar';
import { Footer } from '@/src/layout/Footer';
import { HeroSection } from '@/src/components/HeroSection';
import { AboutSection } from '@/src/components/AboutSection';
import { FormationSection } from '@/src/components/FormationSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FormationSection />
      {/* <ExpertiseSection />
      <ExperienceSection />
      <ActivitiesSection />
      <ValuesSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
}