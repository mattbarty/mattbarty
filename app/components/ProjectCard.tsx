import React from 'react';
import AutoPlaySilentVideo from './AutoPlaySilentVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  type: 'image' | 'gif' | 'video';
  src: string;
  tags: string[];
  projectUrl?: string;
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
      <div className='flex flex-row md:flex-col overflow-clip rounded-lg border border-gray-200 shadow-sm'>
        <div className="md:rounded elative overflow-clip">
          <div className="flex justify-center items-center w-[300px] md:w-full aspect-[8/6] bg-gray-800 z-0 overflow-clip">
            {project.type === 'image' && (
              <img src={project.src} alt={project.title} className="w-full  object-cover" />
            )}
            {project.type === 'gif' && (
              <img src={project.src} alt={project.title} className="w-full object-cover" />
            )}
            {project.type === 'video' && (
              <AutoPlaySilentVideo video={project.src} className="w-full object-cover" />
            )}
          </div>
        </div>
        <div className='flex flex-col mx-2 justify-between'>
          <div>
            <div className='font-semibold mt-2 text-base md:text-base'>{project.title}</div>
            <div className='mt-2 text-sm md:text-base'>{project.description}</div>
          </div>
          <div className='my-2 flex md:flex'>
            <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.webUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {project.webUrl ? (
                <a href={project.webUrl} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              ) : (
                <FontAwesomeIcon icon={faGlobe} />
              )}
            </div>
            <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.githubUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {project.githubUrl ? (
                <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              ) : (
                <FontAwesomeIcon icon={faGithub} />
              )}
            </div>
            <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.linkedInUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {project.linkedInUrl ? (
                <a href={project.linkedInUrl} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              ) : (
                <FontAwesomeIcon icon={faLinkedinIn} />
              )}
            </div>
            <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.figmaUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
              {project.figmaUrl ? (
                <a href={project.figmaUrl} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFigma} />
                </a>
              ) : (
                <FontAwesomeIcon icon={faFigma} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;