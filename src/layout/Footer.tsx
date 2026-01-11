export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Dr. BASSAH-DOTSE K. Marius</h3>
            <p className="text-[12px] text-gray-300 leading-relaxed">Consultant international en stratégie & développement</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Navigation</h3>
            <div className="flex flex-col gap-2 text-[12px] text-gray-300">
              <a href="#about" className="hover:text-blue-400 transition-colors">À Propos</a>
              <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Expérience</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-500">
          © 2026 Dr. BASSAH-DOTSE K. Marius - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};