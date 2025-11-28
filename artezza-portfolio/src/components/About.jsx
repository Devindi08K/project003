import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#001D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#CCA000]">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I hold a Diploma in Information Technology and have hands-on experience handling IT tasks, including troubleshooting, system maintenance, and software management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              On the social media side, I specialize in content creation, post designing, video editing, and social media strategy. I also leverage AI tools like ChatGPT, MidJourney, and Canva AI to create high-quality content efficiently.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about turning ideas into results while maintaining a consistent brand identity across platforms.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/public/profile PHOTO.png"
              alt="Artezza Brand Logo"
              className="w-80 h-80 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;