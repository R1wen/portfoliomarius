'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/95 text-black backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold tracking-tight">BASSAH DOTSE K.</div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            <a href="#about" className="hover:text-blue-600 transition-colors text-sm lg:text-base">À Propos</a>
            <a href="#expertise" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Expertise</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Expérience</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors text-sm lg:text-base">Contact</a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                onClick={toggleMenu}
                className="hover:text-blue-600 transition-colors py-2 text-base"
              >
                À Propos
              </a>
              <a 
                href="#expertise" 
                onClick={toggleMenu}
                className="hover:text-blue-600 transition-colors py-2 text-base"
              >
                Expertise
              </a>
              <a 
                href="#experience" 
                onClick={toggleMenu}
                className="hover:text-blue-600 transition-colors py-2 text-base"
              >
                Expérience
              </a>
              <a 
                href="#contact" 
                onClick={toggleMenu}
                className="hover:text-blue-600 transition-colors py-2 text-base"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};