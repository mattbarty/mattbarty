"use client";
import { useEffect } from "react";
import AutoPlaySilentVideo from "./AutoPlaySilentVideo";

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

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    // Lock the root HTML scroll when the modal is open
    document.documentElement.classList.add('overflow-hidden');
    return () => {
      // Unlock the root HTML scroll when the modal is closed
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center">
      <div className="inset-0 bg-gray-900 opacity-60 backdrop-blur-md h-16" onClick={onClose}></div>
      <div className="bg-red-100 flex justify-center overflow-clip h-full">
        {/* Content */}
        <div className="max-w-4xl px-4 md:px-12 my-6 md:my-12  mx-4 md:mx-8 bg-green-200 w-full">
          {/* headline banner */}
          <div className="flex flex-col sm:flex-row justify-between my-4">
            {/* title */}
            <div className="text-4xl md:text-5xl font-bold mb-4">{project.title}</div>
            {/* social links */}
            <div className="flex">
              <div className="flex items-center justify-center h-8 w-8 mx-4 my-2 bg-blue-200 rounded-full">x</div>
              <div className="flex items-center justify-center h-8 w-8 mx-4 my-2 bg-blue-200 rounded-full">y</div>
              <div className="flex items-center justify-center h-8 w-8 mx-4 my-2 bg-blue-200 rounded-full">z</div>
            </div>
          </div>
          <div className="my-4">{project.description}</div>
          {/* tags */}
          <div className="flex my-4">
            <div className="p-2 mx-2 bg-gray-300 rounded-md">Python</div>
            <div className="p-2 mx-2 bg-gray-300 rounded-md">Python</div>
            <div className="p-2 mx-2 bg-gray-300 rounded-md">Python</div>
          </div>
        </div>
        {/* project content */}
        <div></div>
      </div>
    </div>
  );
};

export default ProjectModal;