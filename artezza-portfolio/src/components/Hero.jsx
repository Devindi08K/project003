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
        {/* Dew Gimhan image - positioned absolutely on the left */}
        <motion.div
          className="absolute -top-24 -left-[160px] z-20 pointer-events-none"
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
        <div className="relative z-10">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-[#CCA000] blur-3xl opacity-20 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl bg-[#F0CB46] blur-2xl opacity-30 -z-10"></div>
          <div className="absolute inset-0 rounded-3xl bg-white blur-xl opacity-10 -z-10"></div>

          {/* Actual card */}
          <div className="relative bg-[#003566]/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#003566]/50 overflow-hidden">
            {/* Content inside card - pushed to the right */}
            <div className="p-10 pl-12 md:pl-56 min-h-[380px] flex flex-col justify-center">
              <motion.h1
                className="text-4xl font-black tracking-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hello, I'm <span className="text-[#CCA000]">Dew Gimhan</span>
              </motion.h1>
              <motion.p
                className="text-gray-300 leading-relaxed text-lg mb-8 max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Social Media Manager & Photographer. Creativity made simple.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-[#CCA000] hover:bg-[#F0CB46] rounded-full font-semibold text-[#000814] shadow-lg shadow-[#CCA000]/50 transition"
                >
                  Explore My Portfolio
                </button>
                <a
                  href="/artezza"
                  className="px-8 py-4 bg-[#003566] hover:bg-[#001D3D] border border-[#CCA000] rounded-full font-semibold text-[#CCA000] hover:text-[#F0CB46] shadow-lg shadow-[#CCA000]/50 transition text-center"
                >
                  View Artezza Brand
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Small logo bottom left */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 text-white/80">
        <div className="w-12 h-12 bg-gradient-to-br from-[#CCA000] to-[#F0CB46] rounded-lg"></div>
        <div>
          <div className="font-bold">Artezza</div>
          <div className="text-xs">Creative Vision & Excellence</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;