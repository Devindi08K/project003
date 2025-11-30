import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Photo animation variants
  const photoVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{
          background: 'linear-gradient(180deg, #000814 0%, #001D3D 100%)',
        }}
        animate={{
          background: [
            'linear-gradient(180deg, #000814 0%, #001D3D 100%)',
            'linear-gradient(180deg, #000814 0%, #003566 50%, #001D3D 100%)',
            'linear-gradient(180deg, #000814 0%, #001D3D 100%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 hero-bg pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Right: Portrait with Enhanced Animations */}
        <motion.div
          className="absolute right-0 top-1/6 transform -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[520px] z-10"
          variants={photoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/dew-gimhan.png"
            alt="Dew Gimhan"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            style={{ boxShadow: '0 8px 48px 0 #00356680' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Enhanced vignette with animation */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #000814e0 60%, transparent 100%)',
              filter: 'blur(10px)',
              borderTopLeftRadius: '1rem',
              borderBottomLeftRadius: '1rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Left: Text with Animations */}
        <motion.div
          className="relative z-20 flex-1 py-12 lg:pr-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-xl">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Hello, I'm <span className="text-[#CCA000]">Dew Gimhan</span>
            </motion.h1>
            <motion.h2
              className="text-2xl lg:text-3xl text-white mb-4 font-medium"
              variants={itemVariants}
            >
              Social Media Manager & Photographer
            </motion.h2>
            <motion.p
              className="text-lg text-white/90 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Crafting engaging content and stunning visuals to bring your ideas to
              life.
            </motion.p>
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 border-2 border-[#CCA000] text-[#CCA000] bg-transparent hover:bg-[#003566] hover:text-[#F0CB46] transition-all duration-300 rounded-md font-semibold shadow-lg hover:shadow-[#CCA000]/50"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px #CCA00050',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;