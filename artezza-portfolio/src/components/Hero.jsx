import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#001D3D] overflow-hidden"
    >
      {/* Big dark blue rings (decorative background) */}
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-[#000814] rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 bg-[#000814] rounded-full opacity-60"></div>

      {/* Main container for card and image */}
      <div className="relative max-w-4xl w-full mx-auto">
        {/* Dew Gimhan image - positioned absolutely on the left, hidden on mobile */}
        <motion.div
          className="absolute -top-24 -left-[160px] z-20 pointer-events-none hidden md:block"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src="/Dew_Gimhan_-removebg-preview.png"
            alt="Dew Gimhan"
            className="w-[450px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Glowing glass card */}
        <div className="relative z-10 md:ml-0">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-cyan-400 blur-3xl opacity-30 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl bg-blue-400 blur-2xl opacity-40 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl bg-sky-300 blur-xl opacity-20 -z-10"></div>

          {/* Actual card */}
          <div className="relative bg-[#003566]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#003566]/50 overflow-hidden">
            {/* Content inside card - centered on mobile, pushed right on desktop */}
            <div className="p-10 md:pl-56 min-h-[380px] flex flex-col justify-center text-center md:text-left">
              <motion.h1
                className="text-4xl font-black tracking-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hello, I'm <span className="text-[#CCA000]">Dew Gimhan</span>
              </motion.h1>
              <motion.p
                className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md mx-auto md:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Social Media Manager & Photographer. Transforming ideas into captivating visuals with seamless creativity and strategic execution.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-[#CCA000] hover:bg-[#F0CB46] rounded-full font-semibold text-[#000814] shadow-lg shadow-cyan-500/50 transition"
                >
                  Explore Me
                </button>
                <a
                  href="/artezza"
                  className="px-8 py-4 bg-[#003566] hover:bg-[#001D3D] border border-[#CCA000] rounded-full font-semibold text-[#CCA000] hover:text-[#F0CB46] shadow-lg shadow-cyan-500/50 transition text-center"
                >
                  Artezza
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;