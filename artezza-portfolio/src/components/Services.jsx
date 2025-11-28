import React from 'react';
import { FaFacebook, FaCamera, FaPalette, FaVideo, FaLaptopCode, FaRobot } from 'react-icons/fa';

const services = [
  {
    title: "Social Media Management",
    description: "Content creation, scheduling, analytics, community management",
    icon: <FaFacebook className="text-[#CCA000]" />
  },
  {
    title: "Professional Photography & Photo Editing",
    description: "Capturing stunning visuals and enhancing them to perfection",
    icon: <FaCamera className="text-[#CCA000]" />
  },
  {
    title: "Graphic Design & Branding",
    description: "Creating visual identities that make your brand stand out",
    icon: <FaPalette className="text-[#CCA000]" />
  },
  {
    title: "Video Editing (Reels, Stories)",
    description: "Engaging video content for social media platforms",
    icon: <FaVideo className="text-[#CCA000]" />
  },
  {
    title: "IT Support & Basic Web Development",
    description: "Technical solutions and web development services",
    icon: <FaLaptopCode className="text-[#CCA000]" />
  },
  {
    title: "AI-Powered Content Creation",
    description: "Leveraging AI tools for efficient, high-quality content",
    icon: <FaRobot className="text-[#CCA000]" />
  }
];

const Services = () => (
  <section id="services" className="py-20 bg-[#000814]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          What I <span className="text-[#CCA000]">Offer</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-[#003566] p-6 rounded-lg hover:bg-[#001D3D] transition-colors duration-300">
            <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#F0CB46] mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;