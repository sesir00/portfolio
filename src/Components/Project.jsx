import React, { useState } from 'react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      icon: '🛒',
      status: 'Live',
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with real-time inventory management, secure payment integration, and an intuitive admin dashboard.',
      tags: ['ASP.NET', 'WebForms', 'SQL'],
      demoLink: '#',
      codeLink: 'https://github.com/sesir00/Intern',
    },
    {
      id: 2,
      icon: '📝',
      status: 'Live',
      title: 'MCQ Generator',
      description:
        'An AI-powered MCQ generation system built using a fine-tuned T5 model trained on SQuAD, capable of context-aware question creation.',
      tags: ['React', 'NodeJS', 'Python', 'T5'],
      demoLink: '#',
      codeLink: 'https://github.com/sesir00/MCQ-Generator',
    },
    {
      id: 3,
      icon: '🎬',
      status: 'Live',
      title: 'CCRStream',
      description:
        'A movie streaming platform supporting user authentication, role-based access, and smooth streaming with a modern UI.',
      tags: ['HTML', 'CSS', 'JS'],
      demoLink: 'https://ccrstream.netlify.app/',
      codeLink: 'https://github.com/sesir00/CCRStream',
    },
    {
      id: 4,
      icon: '💬',
      status: 'Beta',
      title: 'Real-time Chat Application',
      description:
        'A scalable chat platform with groups, file sharing, and real-time messaging using WebSockets.',
      tags: ['React', '.Net Core', 'SignalR', 'Redis', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      icon: '✅',
      status: 'Live',
      title: 'ToDo List',
      description:
        'Task management app built with .NET 9 Web API and React, featuring CRUD operations and JWT authentication.',
      tags: ['React', '.NET 9', 'SQL Server'],
      demoLink: '#',
      codeLink: 'https://github.com/sesir00/Todo-asp',
    },
    {
      id: 6,
      icon: '🏠',
      status: 'Live',
      title: 'Property Bidding System',
      description:
        'A real estate bidding system where users can list properties and participate in transparent bidding.',
      tags: ['ASP.NET', '.NET core', 'SQL Server'],
      demoLink: '#',
      codeLink: 'https://github.com/sesir00/Property-Bidding',
    },
  ];


  return (
    <section
      id="projects"
      className="py-20 px-5 text-white font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent pb-2">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Project Icon/Header */}
              <div className="relative h-48 bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 overflow-hidden flex items-center justify-center">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
                </div>

                {/* Icon */}
                <div className={`text-8xl transition-all duration-500 ${hoveredId === project.id ? 'scale-110 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]' : 'scale-100'
                  }`}>
                  {project.icon}
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-300 ${project.status === 'Live'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400'
                  }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 min-h-[80px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-zinc-800/60 text-green-400 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-700 group-hover:border-green-500/30 group-hover:bg-green-500/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* View Demo */}
                  <a
                    href={project.demoLink}
                    target={project.demoLink !== '#' ? "_blank" : undefined}
                    rel={project.demoLink !== '#' ? "noopener noreferrer" : undefined}
                    onClick={(e) => project.demoLink === '#' && e.preventDefault()}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold py-2.5 px-4 rounded-lg text-center text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 no-underline"
                  >
                    View Demo
                  </a>

                  {/* View Code */}
                  <a
                    href={project.codeLink}
                    target={project.codeLink !== '#' ? "_blank" : undefined}
                    rel={project.codeLink !== '#' ? "noopener noreferrer" : undefined}
                    onClick={(e) => project.codeLink === '#' && e.preventDefault()}
                    className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2.5 px-4 rounded-lg text-center text-sm border border-zinc-700 hover:border-green-500/50 transition-all duration-300 no-underline"
                  >
                    View Code
                  </a>
                </div>

              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-green-500/50 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-500/20 hover:text-green-400 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;