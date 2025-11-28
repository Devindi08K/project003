import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#000814] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src="/dew-gimhan.png"
                alt="Dew Gimhan"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#CCA000] shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-[#CCA000]">Dew Gimhan</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[#F0CB46] mb-6">
              Social Media Manager & Photographer
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Turning ideas into engaging content & stunning visuals
            </p>
            <button
              onClick={scrollToProjects}
              className="bg-[#CCA000] hover:bg-[#F0CB46] text-[#000814] font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;