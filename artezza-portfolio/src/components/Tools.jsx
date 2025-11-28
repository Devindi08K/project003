import React from 'react';
import { FaPhotoVideo, FaVideo, FaPaintBrush, FaCamera, FaMicrosoft, FaFacebook, FaGoogle, FaRobot, FaGem, FaMagic } from 'react-icons/fa';

const tools = [
  { name: "Photoshop", icon: <FaPhotoVideo className="text-[#F0CB46]" /> },
  { name: "CapCut", icon: <FaVideo className="text-[#F0CB46]" /> },
  { name: "Canva", icon: <FaPaintBrush className="text-[#F0CB46]" /> },
  { name: "Lightroom", icon: <FaCamera className="text-[#F0CB46]" /> },
  { name: "Microsoft Office", icon: <FaMicrosoft className="text-[#F0CB46]" /> },
  { name: "Meta Business Suite", icon: <FaFacebook className="text-[#F0CB46]" /> },
  { name: "Google Workspace", icon: <FaGoogle className="text-[#F0CB46]" /> },
  { name: "ChatGPT", icon: <FaRobot className="text-[#F0CB46]" /> },
  { name: "Gemini", icon: <FaGem className="text-[#F0CB46]" /> },
  { name: "MidJourney", icon: <FaMagic className="text-[#F0CB46]" /> },
  { name: "Canva AI", icon: <FaRobot className="text-[#F0CB46]" /> },
];

const Tools = () => (
  <section id="tools" className="py-20 bg-[#001D3D]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          My <span className="text-[#CCA000]">Toolkit</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, idx) => (
          <div key={idx} className="bg-[#003566] p-4 rounded-lg text-center hover:bg-[#000814] transition-colors duration-300 group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">{tool.icon}</div>
            <p className="text-sm text-gray-300 font-medium">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tools;