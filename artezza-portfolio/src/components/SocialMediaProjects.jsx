import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const projects = [
  {
    name: "Upananda College Official",
    url: "https://web.facebook.com/profile.php?id=100064169529734"
  },
  {
    name: "Upananda Prefect Guild",
    url: "https://web.facebook.com/profile.php?id=61566833851658"
  },
  {
    name: "Adoora",
    url: "https://web.facebook.com/profile.php?id=61571179655755"
  },
  {
    name: "Janashakthi Life Galle",
    url: "https://web.facebook.com/profile.php?id=61575096431375"
  },
  {
    name: "Mom's Cake",
    url: "https://web.facebook.com/profile.php?id=100064102361721"
  },
  {
    name: "Dew Z",
    url: "https://web.facebook.com/profile.php?id=61583556944430"
  },
  {
    name: "Artezza",
    url: "https://web.facebook.com/profile.php?id=61558375723895"
  },
  {
    name: "Guys Around The Well",
    url: "https://web.facebook.com/profile.php?id=61565203389065"
  },
  {
    name: "Upananda Past Pupil's Association",
    url: "https://web.facebook.com/upanandacollegepastpupilsassociation"
  }
];

const SocialMediaProjects = () => (
  <section id="projects" className="py-20 bg-[#000814]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Social Media Projects <span className="text-[#CCA000]">I Manage</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#003566] p-6 rounded-lg hover:bg-[#001D3D] transition-colors duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F0CB46] mb-2">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#CCA000] hover:text-[#F0CB46] transition-colors duration-300"
                >
                  Visit Page
                  <FaFacebook className="ml-2 w-4 h-4" />
                </a>
              </div>
              <FaFacebook className="text-3xl text-[#CCA000]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialMediaProjects;