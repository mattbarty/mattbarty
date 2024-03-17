import { type Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const projects = [
  {
    name: 'AI-Augmented Product Design',
    description:
      'Enhancing the product design process using GenAI (Stable Diffusion), Photoshop, and digital painting techniques.',
    link: { href: 'https://www.linkedin.com/posts/the-technology-partnership_generativediffusion-aiintegration-productdevelopment-ugcPost-7174018763535601664-P0WD?utm_source=share&utm_medium=member_desktop', label: 'linkedin.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/sdps-demo.mp4'
  },
  {
    name: 'Hacking my Roomba to avoid cables',
    description:
      'We use hacky electronics and a CV model to teach my Roomba into avoiding cables.',
    link: { href: 'https://youtu.be/IqqvarZpZTM?t=299', label: 'youtube.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/gobby-demo.mp4'
  },
  {
    name: 'CV Sudoku Solver',
    description:
      'Using computer vision to solve sudoku puzzles in realtime.',
    link: { href: 'https://github.com/mattbarty/cv_sudoku_solver', label: 'github.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/sudoku-solver-demo.mp4'
  },
  {
    name: 'Ideas to Domains (GPT-3.5 + GoDaddy)',
    description:
      'A webapp that uses GPT-3.5 and GoDaddy API to generate clever domain names based on your idea description.',
    link: { href: 'https://www.linkedin.com/posts/matthew-barty_turn-your-ideas-into-clever-domains-instantly-activity-7175056135220015104-Ghgo?utm_source=share&utm_medium=member_desktop', label: 'linkedin.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/domainsprout-demo.mp4'
  },
  {
    name: 'ArcanaGPT (Figma Prototype)',
    description:
      'LLM-enabled Tarot webapp. Designed and protoyped in Figma.',
    link: {
      href: 'https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602&mode=design',
      label: 'figma.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/arcanaGPT.mp4'
  },
  {
    name: 'WhatsApp Language Extension',
    description:
      'Augmenting WhatsApp web with language features.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-barty_developercommunity-developer-whatsapp-activity-7079777301743181826-bfDI?utm_source=share&utm_medium=member_desktop',
      label: 'linkedin.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/whatsapp-1-demo.mp4'
  },
  {
    name: 'LinkedInfluencer.app',
    description:
      'WebApp that uses BLIP-2 and GPT-3.5 to generate parody LinkedIn posts.',
    link: { href: 'https://linkedinfluencer.app', label: 'linkedinfluencer.app' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/linkedinfluencer-demo.mp4'
  },
  {
    name: 'Wordle Bot',
    description:
      'Using python, some complex algorithms, and a webdriver to hack a real-world, online Wordle game.',
    link: { href: 'https://github.com/mattbarty/wordle-bot', label: 'github.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/wordle-bot.mp4'
  },
  {
    name: 'AI-Powered Art Workflow',
    description:
      'Combining Midjourney, Stable Diffusion, and Photoshop GenAI models to rapidly create digital art.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-bartsy_rediscovering-my-passion-for-digital-art-activity-7102626220818714624-gYiL?utm_source=share&utm_medium=member_desktop',
      label: 'linkedin.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/art-art-demo.mp4'
  },
  {
    name: 'Data Exploration & Visualisation Tutorial',
    description:
      'A walkthrough tutorial demonstrating how to scrape data from IMDB.com. (ep. 2 of 2)',
    link: {
      href: 'https://youtu.be/SQ4NgT3jDkE?t=1407',
      label: 'youtube.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/data-viz.mp4'
  },
  {
    name: 'Webscrapping Tutorial',
    description:
      'A walkthrough tutorial demonstrating how to scrape series data from IMDB.com (ep. 1 of 2).',
    link: {
      href: 'https://youtu.be/qNfxUsQ70QU',
      label: 'youtube.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/imdb-scraper.mp4'
  },
  {
    name: 'Pokemon Sprites Data Visualisation',
    description:
      'Visualising Pokemon data using sprite art.',
    link: {
      href: 'https://www.kaggle.com/code/mattbarty/gotta-plot-em-all',
      label: 'kaggle.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/plotemall-demo.mp4'
  },
  {
    name: 'Brain Disease Classifier (ML)',
    description:
      'Training a DNN to classify brain tumour type from scans.',
    link: { href: 'https://github.com/mattbarty/brain-tumour-categorical-classifier', label: 'github.com' },
    gif: 'https://dixog9cdtdsmc.cloudfront.net/projects/brain-disease-classifier-demo.gif'
  },
  {
    name: 'Eye Disease Classifier (ML)',
    description:
      'Training a DNN to diagnose my own retina scan.',
    link: { href: 'https://github.com/mattbarty/eye_diseases_classification', label: 'github.com' },
    gif: 'https://dixog9cdtdsmc.cloudfront.net/projects/eye-disease-classification-demo.gif'
  },
  {
    name: 'AI-Generated & Narrated Short Story',
    description:
      'A demo that combines cutting-edge LLM, Image Diffusion, and text-to-voice models to tell an entirely original horror story.',
    link: { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7110525573034033153/', label: 'linkedin.com' },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/ai-story-demo.mp4'
  },
  {
    name: 'ControlNet Portraits',
    description:
      'Using Stable Diffusion to create portraits of myself.',
    link: {
      href: 'https://www.linkedin.com/posts/matthew-barty_stablediffusion-ai-aiartwork-activity-7065698539477069825-eaZ8?utm_source=share&utm_medium=member_desktop',
      label: 'linkedin.com'
    },
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/stable-diffusion-portrait-demo.mp4'
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
      intro="A lot of what I do is highly confidential and usually pretty serious. However, that doesn't mean I don't experiment, build, and learn a bunch of things in my spare time - Here are some personal projects I'm proud to share!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className='bg-black aspect-[5/5] overflow-clip'>
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
            <h2 className="mt-6 text-base font-semibold  text-zinc-100">
              <Card.Link href={project.link.href} target='_blank'>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium  transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
