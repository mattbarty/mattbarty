import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';

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
  const [isFocused, setIsFocused] = useState(false);
  const [maxHeight, setMaxHeight] = useState('300px');

  const handleCardClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <>
      <div
        className={`relative flex p-2 flex-col overflow-clip rounded-lg border border-gray-200 shadow-sm items-center transition-all`}
        onClick={handleCardClick}
      >
        <div className='w-full'>
        </div>
        <div className="md:rounded md:min-w-full">
          <div className="flex justify-center items-center w-full bg-gray-800 z-0 overflow-clip aspect-video md:aspect-square rounded-lg">
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
        <div className='w-full font-semibold text-2xl md:text-base my-4'>{project.title}</div>
        <div className={`${isFocused ? 'hidden' : 'block'}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={`flex flex-col h-full w-full ${isFocused ? 'block' : 'hidden'}`}>
          <div>
            <div className='mt-2 text-sm md:text-sm'>{project.description}</div>
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
      </div >
    </>
  );
};

// Container for playing video
const AutoPlaySilentVideo = (props: any) => {
  const videoRef: any = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
      className={props.className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%" }}>
      <source src={props.video} type="video/mp4" />
    </video>
  );
};

export default ProjectCard;