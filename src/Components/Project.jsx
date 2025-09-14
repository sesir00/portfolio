import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    year: "2025",
    title: "Property Bidding System",
    description: "Online platform for competitive property bidding.",
    tech: ["ASP.NET Core", "SQL"],
    live: "#",
    code: "#",
  },
  {
    year: "2024",
    title: "MCQ Generator",
    description: "Generates multiple-choice questions using a fine-tuned AI model.",
    tech: ["React", "Node.js", "SQL", "Python"],
    live: "#",
    code: "https://github.com/sesir00/MCQ-Generator",
  },
  {
    year: "2023",
    title: "ToDo List",
    description: "MVC-based ToDo app with migrations & middleware.",
    tech: ["React", "ASP.NET Core Web API"],
    live: "#",
    code: "https://github.com/sesir00/Todo-asp",
  },
  
  {
    year: "2022",
    title: "CCRStream",
    description: "Browse, search, and save your favorite movies.",
    tech: ["HTML", "CSS", "TMDb API"],
    live: "https://ccrstream.netlify.app/",
    code: "https://github.com/sesir00/CCRStream",
  },
  
];

export default function ProjectTimeline() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          My Journey
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-green-500 dark:border-green-500">
          {projects.map((p, idx) => (
            <div key={idx} className="mb-12 ml-8">
              {/* Circle */}
              <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3.5 border-4 border-gray-50 dark:border-gray-900"></div>

              {/* Year */}
              <time className="text-sm font-semibold text-green-500">
                {p.year}
              </time>

              {/* Card */}
              <div className="mt-2 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 transition hover:shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {p.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-600 dark:text-white font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 mt-5">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
