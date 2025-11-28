import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000814] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#CCA000]">Artezza</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Services</button>
              <button onClick={() => scrollToSection('photography')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Photography</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium transition-colors">Contact</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#F0CB46] focus:outline-none focus:text-[#F0CB46]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#001D3D]">
              <button onClick={() => scrollToSection('hero')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Services</button>
              <button onClick={() => scrollToSection('photography')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Photography</button>
              <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block text-white hover:text-[#F0CB46] px-3 py-2 text-sm font-medium w-full text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;