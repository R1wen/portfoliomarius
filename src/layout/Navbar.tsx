export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 text-black backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">BASSAH DOTSE K.</div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">À Propos</a>
            <a href="#expertise" className="hover:text-blue-600 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Expérience</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};