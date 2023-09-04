"use client";

import { useState } from "react";
import Link from "next/link";

const projectData = [
  {
    type: "video",
    src: "assets/videos/arcanagpt-demo.mp4",
    title: "ArcanaGPT",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
  {
    type: "video",
    src: "assets/videos/sudoku-solver-demo.mp4",
    title: "CV Sudoku Solver",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
  {
    type: "video",
    src: "assets/videos/ai-art-demo.mp4",
    title: "AI-Powered Art Workflow",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
  {
    type: "video",
    src: "assets/videos/whatsapp-language-features-demo.mp4",
    title: "WhatsApp Language Extension",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
  {
    type: "video",
    src: "assets/videos/linkedinfluencer-demo.mp4",
    title: "LinkedInfluencer",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
];

const Projects = () => {
  return (
    <div className="container py-8 max-w-6xl px-4 md:px-8">
      <div className="text-2xl mb-6 bg-red-300">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          // <Link key={index} href={`${project.projectPageUrl}`}>          </Link>
          <div key={index} className="flex rounded shadow-lg relative">
            <div className="w-full md:aspect-[5/3] aspect-[6/3] bg-yellow-300 z-0">
              {project.type === "image" && (
                <img src={project.src} alt={project.title} className="object-cover" />
              )}
              {project.type === "gif" && (
                <img src={project.src} alt={project.title} className="object-cover" />
              )}
              {project.type === "video" && (
                <video autoPlay muted loop className="w-full aspect-square object-cover">
                  <source src={project.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="absolute px-6 py-4 opacity-0 hover:opacity-80 h-full w-full bg-black">
              <div className="font-bold text-white text-xl md:text-2xl mb-2 opacity-100">{project.title}</div>
              <p className="text-gray-300 text-base">{project.description}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Projects;
