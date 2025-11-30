import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-t from-[#001D3D] to-[#000814] py-8 border-t border-[#003566]/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-300 text-center md:text-left">
            Copyright © 2025 <span className="text-[#CCA000]">Artezza</span> – Dew Gimhan. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://web.facebook.com/profile.php?id=61559391965931" target="_blank" rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#CCA000] transition-colors duration-300 text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/dew-gimhan-07421a2ba/" target="_blank" rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#CCA000] transition-colors duration-300 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;