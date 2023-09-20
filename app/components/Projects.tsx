"use client";
import ProjectCard from './ProjectCard';
import { useEffect, useMemo, useState } from 'react';

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

  const filteredProjects = useMemo(() => {
    if (selectedTags.length) {
      return projectData.filter((project) =>
        project.tags.some((tag) => selectedTags.includes(tag))
      );
    } else {
      return projectData;
    }
  }, [projectData, selectedTags]);

  type ProjectFilterProps = {
    tags: string[];
    onTagClick: (tag: string) => void;
  };

  const ProjectFilter = ({ tags, onTagClick }: ProjectFilterProps) => {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : ''
              } px-4 py-2 rounded-md border border-blue-500`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container flex flex-col items-center py-4 max-w-6xl px-4 md:px-4 border-t-2">
        <div className="text-2xl md:text-4xl my-6">Projects</div>

        <ProjectFilter tags={['Python', 'React', 'TypeScript']} onTagClick={handleTagClick} />

        <div className="max-w-[450px] md:max-w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;