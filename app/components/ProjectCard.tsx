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
      <div className='relative flex flex-row md:flex-col overflow-clip rounded-lg border border-gray-200 shadow-sm md:items-center'>
        <div className="md:rounded elative overflow-clip min-w-[200px] md:min-w-full">
          <div className="flex justify-center items-center w-full bg-gray-800 z-0 overflow-clip aspect-square h-[200px] ">
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
        <div className='md:absolute md:justify-end md:h-full md:w-full md:opacity-0 md:hover:opacity-100 transition-all md:bg-black md:bg-opacity-60 md:backdrop-blur-sm md:text-white'>
          <div className='flex flex-col h-full w-full mx-2 p-2 md:p-4 md:h-full md:w-auto justify-between md:justify-end'>
            <div>
              <div className='font-semibold mt-2 text-base md:text-base'>{project.title}</div>
              <div className='mt-2 text-sm text-gray-600 md:text-gray-300 md:text-sm'>{project.description}</div>
            </div>
            <div className='my-2 pt-4 flex md:flex border-t-2 w-full'>
              <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.webUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {project.webUrl ? (
                  <a href={project.webUrl} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-full h-full'>
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                ) : (
                  <FontAwesomeIcon icon={faGlobe} />
                )}
              </div>
              <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.githubUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {project.githubUrl ? (
                  <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-full h-full'>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                ) : (
                  <FontAwesomeIcon icon={faGithub} />
                )}
              </div>
              <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.linkedInUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {project.linkedInUrl ? (
                  <a href={project.linkedInUrl} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-full h-full'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                ) : (
                  <FontAwesomeIcon icon={faLinkedinIn} />
                )}
              </div>
              <div className={`flex items-center justify-center rounded-lg w-10 h-6 mx-1 text-[white] ${project.figmaUrl ? 'bg-blue-500' : 'bg-gray-300'}`}>
                {project.figmaUrl ? (
                  <a href={project.figmaUrl} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center w-full h-full'>
                    <FontAwesomeIcon icon={faFigma} />
                  </a>
                ) : (
                  <FontAwesomeIcon icon={faFigma} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default ProjectCard;