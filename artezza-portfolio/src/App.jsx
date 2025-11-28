import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PhotographyGallery from './components/PhotographyGallery';
import SocialMediaProjects from './components/SocialMediaProjects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PhotographyGallery />
      <SocialMediaProjects />
      <Skills />
      <Experience />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
