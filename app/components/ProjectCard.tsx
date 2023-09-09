import React from 'react';
import AutoPlaySilentVideo from './AutoPlaySilentVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

type Project = {
  title: string;
  description: string;
  type: 'image' | 'gif' | 'video';
  src: string;
  webUrl?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  figmaUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <div className='flex flex-col overflow-clip rounded-lg border border-gray-200 shadow-sm'>
        <div className="rounded elative">
          <div className="w-full aspect-[8/6] bg-yellow-300 z-0">
            {project.type === 'image' && (
              <img src={project.src} alt={project.title} className="object-cover" />
            )}
            {project.type === 'gif' && (
              <img src={project.src} alt={project.title} className="object-cover" />
            )}
            {project.type === 'video' && (
              <AutoPlaySilentVideo video={project.src} className="w-full object-cover" />
            )}
          </div>
        </div>
        <div className='flex flex-col mx-2'>
          <div className='font-semibold mt-2 text-base md:text-base'>{project.title}</div>
          <div className='mt-2 text-sm md:text-base'>{project.description}</div>
          <div className='my-2 flex'>
            {project.webUrl && (
              <a href={project.webUrl} target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center justify-center rounded-lg bg-green-400 w-10 h-6 mx-1 text-[text]'>
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center justify-center rounded-lg bg-green-400 w-10 h-6 mx-1 text-[text]'>
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </a>
            )}
            {project.linkedInUrl && (
              <a href={project.linkedInUrl} target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center justify-center rounded-lg bg-green-400 w-10 h-6 mx-1 text-[text]'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
            )}
            {project.figmaUrl && (
              <a href={project.figmaUrl} target='_blank' rel='noopener noreferrer'>
                <div className='flex items-center justify-center rounded-lg bg-green-400 w-10 h-6 mx-1 text-[text]'>
                  <FontAwesomeIcon icon={faFigma} />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;