import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Social Media Skills",
      skills: [
        "Content Creation (Posts, Reels, Stories)",
        "Caption Writing",
        "Graphic Design",
        "Video Editing",
        "Social Media Strategy",
        "Content Planning & Scheduling",
        "Hashtag Research & Optimization",
        "Analytics & Reporting",
        "Community Management",
        "Branding & Visual Identity"
      ]
    },
    {
      title: "IT Skills",
      skills: [
        "Hardware",
        "Networking",
        "Troubleshooting",
        "Basic Programming",
        "System Maintenance",
        "MS Office Suite",
        "Google Workspace",
        "Basic Web Development"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Teamwork",
        "Creativity",
        "Problem-Solving",
        "Time Management",
        "Flexibility",
        "Critical Thinking",
        "Leadership",
        "Organization",
        "Multitasking",
        "Emotional Intelligence"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#001D3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-[#CCA000]">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#003566] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#F0CB46] mb-6 text-center">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 flex items-start">
                    <span className="text-[#CCA000] mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;