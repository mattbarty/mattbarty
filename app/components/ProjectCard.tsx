import React from 'react';

type Project = {
  title: string;
  description: string;
  type: 'image' | 'gif' | 'video';
  src: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex rounded shadow-lg relative">
      <div className="w-full md:aspect-[5/3] aspect-[6/3] bg-yellow-300 z-0">
        {project.type === 'image' && (
          <img src={project.src} alt={project.title} className="object-cover" />
        )}
        {project.type === 'gif' && (
          <img src={project.src} alt={project.title} className="object-cover" />
        )}
        {project.type === 'video' && (
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
  );
};

export default ProjectCard;