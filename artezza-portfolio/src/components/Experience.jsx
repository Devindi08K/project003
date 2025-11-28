import React from 'react';
import { FaAward, FaGraduationCap, FaTools } from 'react-icons/fa';

const experiences = [
  {
    title: "1+ year of professional Social Media Management",
    icon: <FaAward className="text-[#CCA000]" />
  },
  {
    title: "Diploma in Information Technology",
    icon: <FaGraduationCap className="text-[#CCA000]" />
  },
  {
    title: "Proficient in Photoshop, CapCut, Canva, Lightroom, Meta Business Suite, AI tools",
    icon: <FaTools className="text-[#CCA000]" />
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-[#000814]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Experience & <span className="text-[#CCA000]">Education</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((experience, idx) => (
          <div key={idx} className="bg-[#003566] p-6 rounded-lg text-center hover:bg-[#001D3D] transition-colors duration-300">
            <div className="text-5xl mb-4 flex justify-center">{experience.icon}</div>
            <p className="text-lg text-gray-300 leading-relaxed">{experience.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;