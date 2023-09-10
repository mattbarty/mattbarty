type ProjectFilterProps = {
  tags: string[];
  onTagClick: (tag: string) => void;
  selectedTags: string[];
};

const ProjectFilter = ({ tags, onTagClick, selectedTags }: ProjectFilterProps) => {
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

export default ProjectFilter;