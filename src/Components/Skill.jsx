import React from "react";
import SplitText from "../Extra/SplitText";
import LogoLoop from "../Extra/LogoLoop";
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

// 🎨 Brand colors
const techColors = {
  React: "#61DBFB",
  "Next.js": "#000000",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  ".NET Core": "#512BD4",
  HTML: "#E44D26",
  CSS: "#264de4",
  Git: "#F1502F",
  SQL: "#336791",
  "Node.js": "#68A063",
  Docker: "#2496ED",
  Express: "#000000",
  Blazor: "#512BD4",
  Python: "#3776AB",
};

// 🌀 Tech Logos with auto-color
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDotnet />, title: ".NET Core", href: "https://dotnet.microsoft.com/" },
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiMysql />, title: "SQL", href: "https://www.mysql.com/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
  { node: <SiBlazor />, title: "Blazor", href: "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
].map((tech) => ({
  ...tech,
  node: React.cloneElement(tech.node, {
    className: "w-12 h-12 transition-colors duration-300",
    style: { color: techColors[tech.title] || "#666" },
  }),
}));

const Skill = () => {
  return (
    <section
      id="skill"
      className="py-16 px-5 bg-gray-50 text-center font-poppins"
    >
      <SplitText
        text="Skills"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <div className="relative h-[200px] overflow-hidden mt-8">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Skill;
