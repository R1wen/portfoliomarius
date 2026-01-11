import {
  HeroSection,
  AboutSection,
  FormationSection,
  ExpertiseSection,
  ExperienceSection,
  ActivitiesSection,
  BooksSection,
  ContactSection,
} from '@/src/components';
import { portfolioData } from "@/src/data/portfolio-data";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dr. BASSAH-DOTSE K. Marius | Portfolio",
  description: 'Portfolio de Dr. BASSAH-DOTSE K. Marius',
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection data={portfolioData.hero} />
      <AboutSection data={portfolioData.about} />
      <FormationSection items={portfolioData.formation} />
      <ExpertiseSection items={portfolioData.expertise} />
      <ExperienceSection items={portfolioData.experiences} />
      <ActivitiesSection data={portfolioData.activities} />
      <BooksSection data={{ books: portfolioData.books }} />
      <ContactSection data={portfolioData.contact} />
    </div>
  );
}
