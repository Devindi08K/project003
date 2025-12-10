import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: "Photoshop", logo: "/logos/photoshop-logo.png" },
  { name: "CapCut", logo: "/logos/capcut-logo.png" },
  { name: "Canva", logo: "/logos/canva-logo.png" },
  { name: "Lightroom", logo: "/logos/lightroom-logo.png" },
  { name: "Microsoft Office", logo: "/logos/microsoft-office-logo.png" },
  { name: "Meta Business Suite", logo: "/logos/meta-business-suite-logo.png" },
  { name: "Google Workspace", logo: "/logos/google-workspace-logo.png" },
  { name: "ChatGPT", logo: "/logos/chatgpt-logo.png" },
  { name: "Gemini", logo: "/logos/gemini-logo.png" },
  { name: "MidJourney", logo: "/logos/midjourney-logo.png" },
  { name: "Canva AI", logo: "/logos/canva-ai-logo.png" },
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
            className="relative bg-gradient-to-br from-[#00223a] to-[#003566] p-4 rounded-lg text-center transition-all duration-300 group shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mx-auto w-16 h-16 rounded-md bg-white/5 flex items-center justify-center mb-3">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 object-contain"
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