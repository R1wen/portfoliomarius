export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BASSAH DOTSE K. Marius</h3>
            <p className="text-gray-400 text-sm">Consultant international en stratégie & développement</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">À Propos</a>
              <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Expérience</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="text-sm text-gray-400">
              <p>Email: marius.eliteschool@outlook.com</p>
              <p>Tél: +17(480)315</p>
              <p>LinkedIn: <a href="#" target="_blank">linkedin.com/in/mabassadotse</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 BASSAH DOTSE K. Marius - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};