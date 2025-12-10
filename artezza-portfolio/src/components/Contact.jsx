import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaDownload, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiBehance } from 'react-icons/si';

const Contact = () => (
  <section id="contact" className="py-20 bg-[#000814]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Get In <span className="text-[#CCA000]">Touch</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <FaUser className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Name</h3>
              <p className="text-gray-300">Dew Gimhan Liyanarachchi</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Email</h3>
              <a href="mailto:dewgliyanarachchi@gmail.com" className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                dewgliyanarachchi@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Phone</h3>
              <a href="tel:0723229074" className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                072 322 9074
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Facebook</h3>
              <a href="https://web.facebook.com/profile.php?id=61559391965931" target="_blank" rel="noopener noreferrer"
                className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                Visit Profile
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaInstagram className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Instagram</h3>
              <a href="https://www.instagram.com/dew_liyanarachchi/?igsh=ZmJ4aDVpZHd2cTNu#" target="_blank" rel="noopener noreferrer"
                className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                @dew_liyanarachchi
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaTiktok className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">TikTok</h3>
              <a href="https://www.tiktok.com/@lumierelense?_t=ZS-8xCRltf3Nen&_r=1" target="_blank" rel="noopener noreferrer"
                className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                @lumierelense
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/dew-gimhan-07421a2ba/" target="_blank" rel="noopener noreferrer"
                className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                View Profile
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SiBehance className="text-2xl text-[#CCA000]" />
            <div>
              <h3 className="text-xl font-bold text-[#F0CB46]">Behance</h3>
              <a href="https://www.behance.net/gallery/207472057/My-works" target="_blank" rel="noopener noreferrer"
                className="text-[#CCA000] hover:text-[#F0CB46] transition-colors">
                My Works
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <a
            href="/cv-dew-gimhan.pdf"
            download
            className="bg-[#CCA000] hover:bg-[#F0CB46] text-[#000814] font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 transform hover:scale-105 inline-flex items-center mb-6"
          >
            <FaDownload className="mr-3 w-6 h-6" />
            Download CV
          </a>
          <img
            src="/signature_1-removebg-preview.png"
            alt="Signature"
            className="w-80 h-auto object-contain opacity-90"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;