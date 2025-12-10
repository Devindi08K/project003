import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from './Footer';

const photographySkills = [
  "Portrait Photography",
  "Event & Lifestyle Photography",
  "Product Photography",
  "Outdoor / Natural Light Photography",
  "Creative Composition",
  "Color Grading & Retouching",
  "Lighting Setup & Control",
  "Photo Editing (Lightroom / Photoshop)",
  "Visual Storytelling",
  "Posing & Direction"
];

const videographySkills = [
  "Cinematic Video Shooting",
  "Camera Movement Techniques",
  "Storyboarding & Shot Planning",
  "Video Editing (Capcut)",
  "Sound Design & Audio Mixing",
  "Color Grading for Video",
  "Drone Videography (If you use it)",
  "B-Roll & Creative Transitions",
  "Lighting for Video",
  "Social Media Video Production"
];

const extraSkills = [
  "Creative Direction",
  "Branding Awareness",
  "Social Media Content Creation",
  "Set Design & Styling"
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, type: "spring" } }
};

const Artezza = () => (
  <>
    <section className="min-h-screen py-20 bg-gradient-to-b from-[#001D3D] to-[#000814]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center px-5 py-2 rounded-lg bg-[#003566] text-[#CCA000] hover:bg-[#CCA000] hover:text-[#003566] font-semibold transition-all duration-300 shadow-lg"
          >
            <FaArrowLeft className="mr-2" /> Back to Portfolio
          </a>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left: Logo */}
          <motion.div
            className="flex flex-col items-center md:col-span-1"
            variants={cardVariants}
          >
            <motion.img
              src="/artezza-logo.png"
              alt="Artezza Logo"
              className="w-64 h-64 object-contain rounded-full shadow-xl border-4 border-[#CCA000] bg-white/5"
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            />
          </motion.div>

          {/* Right: Description */}
          <motion.div
            className="md:col-span-2"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl font-bold text-[#CCA000] mb-2 drop-shadow text-center md:text-left"
              variants={cardVariants}
            >
              Artezza
            </motion.h1>
            <motion.h2
              className="text-xl text-white mb-6 font-semibold text-center md:text-left"
              variants={cardVariants}
            >
              by Dew Gimhan
            </motion.h2>
            <motion.p
              className="text-gray-100 font-serif text-center md:text-left mb-8 leading-8 text-lg bg-[#003566]/40 rounded-xl p-6 shadow-lg"
              style={{ fontFamily: "'Merriweather', serif" }}
              variants={cardVariants}
            >
              I’m Dew Gimhan, the founder and creative force behind Artezza — a brand built on passion, artistry, and meaningful storytelling. I believe every frame holds a feeling, and every moment deserves to be captured with intention. With a style that blends creativity, emotion, and visual depth, I turn ordinary scenes into cinematic stories that connect, inspire, and stay memorable. My work reflects who I am: dedicated, detail-driven, and always pushing to create something truly unique.
              <br /><br />
              With 3 years of professional experience in photography and videography, I’ve had the opportunity to work with some of the best brands in Sri Lanka, helping them build stronger visuals and elevate their identity. From commercial shoots and brand campaigns to portraits and cinematic videos, I bring both skill and passion into every project. Artezza is more than a brand — it’s the way I bring ideas to life through creative vision and visual excellence.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#003566]/60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #CCA00055" }}
          >
            <h3 className="text-2xl font-bold text-[#F0CB46] mb-4 text-center">Photography Skills</h3>
            <ul className="space-y-2">
              {photographySkills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="text-gray-300 flex items-center group cursor-pointer hover:text-[#CCA000] transition-colors duration-200"
                  whileHover={{ x: 8, color: "#CCA000" }}
                >
                  <span className="text-[#CCA000] mr-2 group-hover:text-[#F0CB46] transition-colors duration-200">•</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-[#003566]/60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #CCA00055" }}
          >
            <h3 className="text-2xl font-bold text-[#F0CB46] mb-4 text-center">Videography Skills</h3>
            <ul className="space-y-2">
              {videographySkills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="text-gray-300 flex items-center group cursor-pointer hover:text-[#CCA000] transition-colors duration-200"
                  whileHover={{ x: 8, color: "#CCA000" }}
                >
                  <span className="text-[#CCA000] mr-2 group-hover:text-[#F0CB46] transition-colors duration-200">•</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-[#003566]/60 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 32px #CCA00055" }}
        >
          <h3 className="text-2xl font-bold text-[#F0CB46] mb-4 text-center">Other Skills</h3>
          <ul className="space-y-2">
            {extraSkills.map((skill, idx) => (
              <motion.li
                key={idx}
                className="text-gray-300 flex items-center group cursor-pointer hover:text-[#CCA000] transition-colors duration-200"
                whileHover={{ x: 8, color: "#CCA000" }}
              >
                <span className="text-[#CCA000] mr-2 group-hover:text-[#F0CB46] transition-colors duration-200">•</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
    <Footer />
  </>
);

export default Artezza;