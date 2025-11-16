import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMysql,
  SiNodedotjs,
  SiDocker,
  SiExpress,
  SiBlazor,
  SiPython,
} from "react-icons/si";

// Tech stack with original brand colors
const techStack = [
  { Icon: SiReact, name: "React", color: "#61DBFB", href: "https://react.dev" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF", href: "https://nextjs.org" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", href: "https://www.typescriptlang.org" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", href: "https://tailwindcss.com" },
  { Icon: SiDotnet, name: ".NET Core", color: "#512BD4", href: "https://dotnet.microsoft.com/" },
  { Icon: SiHtml5, name: "HTML", color: "#E44D26", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { Icon: SiCss3, name: "CSS", color: "#264de4", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { Icon: SiGit, name: "Git", color: "#F1502F", href: "https://git-scm.com/" },
  { Icon: SiMysql, name: "SQL", color: "#336791", href: "https://www.mysql.com/" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#68A063", href: "https://nodejs.org" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED", href: "https://www.docker.com/" },
  { Icon: SiExpress, name: "Express", color: "#FFFFFF", href: "https://expressjs.com/" },
  { Icon: SiBlazor, name: "Blazor", color: "#512BD4", href: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor" },
  { Icon: SiPython, name: "Python", color: "#3776AB", href: "https://www.python.org" },
];

const Skill = () => {
  return (
    <section
      id="skill"
      className="py-20 px-5 text-center font-poppins"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent pb-2">
          Skills & Technologies 
        </h1>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Proficient in modern technologies and frameworks to build scalable, performant applications
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 mt-12">
          {techStack.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-green-500/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20 no-underline"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon Container */}
              <div className="relative flex flex-col items-center gap-3">
                <div className="relative">
                  {/* Icon Glow Background */}
                  <div 
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: tech.color }}
                  />
                  
                  {/* Icon */}
                  <tech.Icon 
                    className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 group-hover:scale-110 relative z-10"
                    style={{ color: tech.color }}
                  />
                </div>

                {/* Tech Name */}
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl pointer-events-none" />
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
              14+
            </div>
            <div className="text-gray-400 font-medium">Technologies</div>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <div className="text-gray-400 font-medium">Years Experience</div>
          </div>
          
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-400 font-medium">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;