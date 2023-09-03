const projectData = [
  {
    type: "image",
    src: "/path/to/image.jpg",
    title: "Project 1",
    description: "This is the description for Project 1.",
  },
  {
    type: "gif",
    src: "/path/to/animation.gif",
    title: "Project 2",
    description: "This is the description for Project 2.",
  },
  {
    type: "video",
    src: "/path/to/video.mp4",
    title: "Project 3",
    description: "This is the description for Project 3.",
  },
  // ... add more projects as needed
];

const Projects = () => {
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
    </div>
  );
};

export default Projects;
