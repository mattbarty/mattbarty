"use client";
import ProjectCard from './ProjectCard';
import { useEffect, useState } from 'react';

type Project = {
  title: string;
  description: string;
  type: 'image' | 'gif' | 'video';
  src: string;
};

type ProjectsProps = {
  projectData: Project[];
};

const Projects = () => {

  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/projectData.json');
      const data = await response.json();
      setProjectData(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="container py-8 max-w-6xl px-4 md:px-4">
      <div className="text-2xl mb-6 bg-red-300">Projects</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
