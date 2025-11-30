import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: "Photoshop", logo: "/artezza-logo.png" },
  { name: "CapCut", logo: "/artezza-logo.png" },
  { name: "Canva", logo: "/artezza-logo.png" },
  { name: "Lightroom", logo: "/artezza-logo.png" },
  { name: "Microsoft Office", logo: "/artezza-logo.png" },
  { name: "Meta Business Suite", logo: "/artezza-logo.png" },
  { name: "Google Workspace", logo: "/artezza-logo.png" },
  { name: "ChatGPT", logo: "/artezza-logo.png" },
  { name: "Gemini", logo: "/artezza-logo.png" },
  { name: "MidJourney", logo: "/artezza-logo.png" },
  { name: "Canva AI", logo: "/artezza-logo.png" },
];

const Tools = () => (
  <section id="tools" className="py-20 bg-[#001D3D]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          My <span className="text-[#CCA000]">Toolkit</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            className="bg-[#003566] p-4 rounded-lg text-center hover:bg-[#000814] transition-all duration-300 group shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 object-contain rounded-md"
              />
            </div>
            <p className="text-sm text-gray-300 font-medium">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Tools;