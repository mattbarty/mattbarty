"use client";
import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  description: string;
  type: 'image' | 'gif' | 'video';
  src: string;
  tags: string[];
  webUrl?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  figmaUrl?: string;
};

const Projects = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projectData.json');
      const data = await response.json();
      setProjectData(data);
    };
    fetchProjects();
  }, []);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredProjects = selectedTags.length
    ? projectData.filter((project) =>
      project.tags.some((tag) => selectedTags.includes(tag))
    )
    : projectData;

  return (
    <div className="container py-8 max-w-6xl px-4 md:px-4">
      <div className="text-2xl mb-6 bg-red-300">Projects</div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          className={`${selectedTags.includes('Python') ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 rounded-md border border-blue-500`}
          onClick={() => handleTagClick('Python')}
        >
          Python
        </button>
        <button
          className={`${selectedTags.includes('React') ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 rounded-md border border-blue-500`}
          onClick={() => handleTagClick('React')}
        >
          React
        </button>
        <button
          className={`${selectedTags.includes('TypeScript') ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 rounded-md border border-blue-500`}
          onClick={() => handleTagClick('TypeScript')}
        >
          TypeScript
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;