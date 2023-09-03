"use client";

import { useState } from "react";

const projectData = [
  {
    type: "image",
    src: "/path/to/image.jpg",
    title: "Project 1",
    description: "This is the description for Project 1.",
    tags: ["web", "design"],
  },
  {
    type: "gif",
    src: "/path/to/animation.gif",
    title: "Project 2",
    description: "This is the description for Project 2.",
    tags: ["app", "mobile"],
  },
  {
    type: "video",
    src: "/path/to/video.mp4",
    title: "Project 3",
    description: "This is the description for Project 3.",
    tags: ["app", "mobile"],
  },
  // ... add more projects as needed
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Initialize state for search term

  // Filtering projects based on search term and tags
  const filteredProjects = projectData.filter((project) =>
    project.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-2xl mb-6 bg-red-300">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            {project.type === "image" && (
              <img src={project.src} alt={project.title} />
            )}
            {project.type === "gif" && (
              <img src={project.src} alt={project.title} />
            )}
            {project.type === "video" && (
              <video controls>
                <source src={project.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7103756528490278912"
        height="504"
        width="504"
        frameborder="0"
        allowfullscreen=""
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default Projects;
