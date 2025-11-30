import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#001D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-[#CCA000]">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I hold a Diploma in Information Technology and have hands-on experience handling IT tasks, including troubleshooting, system maintenance, and software management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              On the social media side, I specialize in content creation, post designing, video editing, and social media strategy. I also leverage AI tools like ChatGPT, MidJourney, and Canva AI to create high-quality content efficiently.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about turning ideas into results while maintaining a consistent brand identity across platforms.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="/artezza-logo.png"
              alt="Artezza Brand Logo"
              className="w-80 h-80 object-cover rounded-full shadow-lg border-2 border-[#CCA000] hover:border-[#F0CB46] transition-colors duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;