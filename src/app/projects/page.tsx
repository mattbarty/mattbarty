import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const projects = [
  {
    name: 'CV Sudoku Solver',
    description:
      'Using computer vision to solve sudoku puzzles in realtime.',
    link: { href: 'https://github.com/mattbarty/cv_sudoku_solver', label: 'github.com' },
    video: '/videos/sudoku-solver-demo.mp4'
  },
  {
    name: 'ArcanaGPT (Figma Prototype)',
    description:
      'LLM-enabled Tarot webapp. Designed and protoyped in Figma.',
    link: {
      href: 'https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602&mode=design',
      label: 'figma.com'
    },
    video: '/videos/arcanagpt-demo.mp4'
  },
  {
    name: 'ControlNet Portraits',
    description:
      'Using Stable Diffusion to create portraits of my myself.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-barty_stablediffusion-ai-aiartwork-activity-7065698539477069825-eaZ8?utm_source=share&utm_medium=member_desktop',
      label: 'github.com'
    },
    video: '/videos/stable-diffusion-portrait-demo.mp4'
  },
  {
    name: 'Brain Disease Classifier (ML)',
    description:
      'Training a DNN to classify brain tumour type from scans.',
    link: { href: 'https://github.com/mattbarty/brain-tumour-categorical-classifier', label: 'github.com' },
    gif: 'gifs/brain-disease-classifier-demo.gif'
  },
  {
    name: 'Eye Disease Classifier (ML)',
    description:
      'Training a DNN to diagnose my own retina scan.',
    link: { href: 'https://github.com/mattbarty/eye_diseases_classification', label: 'github.com' },
    gif: 'gifs/eye-disease-classification-demo.gif'
  },
  {
    name: 'AI-Powered Art Workflow',
    description:
      'Combining Midjourney, Stable Diffusion, and Photoshop GenAI models to rapidly create digital art.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-bartsy_rediscovering-my-passion-for-digital-art-activity-7102626220818714624-gYiL?utm_source=share&utm_medium=member_desktop',
      label: 'linkedin.com'
    },
    video: 'videos/ai-art-demo.mp4'
  },
  {
    name: 'WhatsApp Language Extension',
    description:
      'Augmenting WhatsApp web with language features.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-barty_developercommunity-developer-whatsapp-activity-7079777301743181826-bfDI?utm_source=share&utm_medium=member_desktop',
      label: 'linkedin.com'
    },
    video: 'videos/whatsapp-language-features-demo.mp4'
  },
  {
    name: 'LinkedInfluencer',
    description:
      'WebApp that uses BLIP-2 and GPT-3.5 to generate parody LinkedIn posts.',
    link: { href: 'https://linkedinfluencer.app', label: 'linkedinfluencer.app' },
    video: 'videos/linkedinfluencer-demo.mp4'
  },
  {
    name: 'Pokemon Sprites Data Visualisation',
    description:
      'Visualising Pokemon data using sprite art.',
    link: {
      href: 'https://www.kaggle.com/code/mattbarty/gotta-plot-em-all',
      label: 'kaggle.com'
    },
    video: 'videos/plotemall-demo.mp4'
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve built"
      intro="In my spare time I’ve worked on tons of little projects to experiment with new tech, 
      solve a personal problem, or just to do something fun! Here are a few of my favorites"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className='bg-black aspect-[6/5] overflow-clip'>
              {project.video ? (
                <Card.VideoAutoplay src={project.video} />
              ) : project.gif ? (
                <img src={project.gif} alt="" />
              ) : (
                <Image
                  // src={project.img}
                  // temp img ref
                  src={'/images/avatar.jpg'}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              )}
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target='_blank'>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
