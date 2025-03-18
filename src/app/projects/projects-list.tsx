'use client';

import Image from 'next/image';
import clsx from 'clsx';

import { Card } from '@/components/Card';
import { LazyVideoCard } from '@/components/VideoCard';
import { CardDescription } from '@/components/CardComponents';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ExternalLink } from 'lucide-react';
const projects = [
  {
    name: 'Creative AI - GenAI for Creative Expression',
    description:
      'Presentation on the state-of-the-art generative models and how GenAI is enabling new forms of creative expression. A collection of personal and professional projects that I have worked on.',
    links: [
      { href: 'https://www.linkedin.com/posts/mattbarty_aiartcommunity-midjourney-genai-activity-7224769449789140993-HLkh?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/creative-ai-presentation-compressed.mp4',
    technologies: ['Generative AI', 'Midjourney', 'Public Speaking', 'Creative Technology']
  },
  {
    name: 'Hex Engine - Procedural World Generator',
    description:
      'Procedurally generate beautiful 3D hexagonal landscapes with realistic terrain generation. Runs in the browser with ThreeJS and React.',
    links: [
      { href: 'https://hexengine.vercel.app/', label: 'Demo - (hexengine.com)' },
      { href: 'https://github.com/mattbarty/hexengine', label: 'Github' },
      { href: 'https://www.linkedin.com/posts/mattbarty_creativecoding-react-threejs-activity-7305514623804276737-dsFZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/hexengine-gif-compressed2.mp4',
    technologies: ['NextJS', 'ReactJS', 'ThreeJS']
  },
  {
    name: 'DDPM Study - Denoising Diffusion Models',
    description:
      'Self-study implementation of a Denoising Diffusion Probalistic Model (DDPM) for generating MNIST handwritten digits. This implementation was created as a self-study exercise to understand diffusion models through hands-on practice',
    links: [
      { href: 'https://github.com/mattbarty/generativeDiffusionStudy', label: 'Github' },
      { href: 'https://www.linkedin.com/posts/mattbarty_machinelearning-diffusionmodels-generativeai-activity-7301625622647209984-0_Co?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/DiffusionNotebook.mp4',
    technologies: ['Python', 'PyTorch', 'Diffusion Models', 'Generative AI', 'Generative Diffusion', 'Generative AI']
  },
  {
    name: 'Vox Populi - AI Hackathon (🥉 Winner)',
    description:
      'Developed 3D sandbox game enabling dynamic speech interaction with AI agents in a 24-hour timeframe. Built custom game engine in ThreeJS to facilitate unique AI autonomy and voice-driven gameplay.',
    links: [
      { href: 'https://www.linkedin.com/posts/mattbarty_elevenlabs-hackathon-genai-activity-7299950987161554945-hyVe?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' },
      { href: 'https://github.com/mattbarty/elevenlabhackathon', label: 'Github' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/voxPopuli-demo.mp4',
    technologies: ['NextJS', 'ReactJS', 'ThreeJS', 'ElevenLabs Conversational AI', 'ElevenLabs TTS API', 'GPT-4o-mini API']
  },
  {
    name: 'LlamaXpat - Interactive Career Atlas | Meta Hackathon',
    description:
      'Created AI-powered career exploration platform combining interactive maps with LLM-driven country insights within 24-hour hackathon constraint. Implemented Llama-2.1 model through Groq for fast, contextual career advice based on location selection.',
    links: [
      { href: 'https://llamaxpat.vercel.app/', label: 'Demo - (llamaxpat.vercel.app)' },
      { href: 'https://www.linkedin.com/posts/mattbarty_ai-conversationalai-creativeai-activity-7264532946143875072-BFnS?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' },
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/meta_hackathon_showcase_compressed.mp4',
    technologies: ['NextJS', 'ReactJS', 'MapBox', 'Llama-2.1', 'Groq API']
  },
  {
    name: '"Guess Who" - Conversational AI Guessing Game (🥇 Winner)',
    description:
      'Reimagined the classic "Guess Who" game using Speechmatics\' conversational AI Flow API. Built interactive web interface with real-time speech recognition and character identification. Engineered dynamic game logic combining speech recognition with AI character reasoning.',
    links: [
      { href: 'https://www.linkedin.com/posts/mattbarty_ai-conversationalai-creativeai-activity-7262720946371715073-sk_e?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/speechmatics_flow_showcase_compressed.mp4',
    technologies: ['NextJS', 'ReactJS', 'Speechmatics FLOW API', 'GPT-4o-mini']
  },
  {
    name: 'AI Generated Music Video',
    description:
      'One of the first fully AI-directed music videos created just days after public release of txt2vid technologies. Produced with 100% AI-generated visuals and music using cutting-edge generative models, with techniques developed for maintaining character consistency between scenes.',
    links: [
      { href: 'https://www.linkedin.com/posts/mattbarty_luma-lumadreammachine-aiartcommunity-activity-7208024311926812673-_gxl?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' },
      { href: 'https://youtu.be/n9Y0CZ4BOx0?si=BpcZHfQt1fft5Cbd', label: 'Youtube' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/dream_machine_demo.mp4',
    technologies: ['Midjourney (Generative Diffusion)', 'Luma (img2vid)', 'Suno (txt2Music)', 'Photoshop', 'Premiere']
  },
  {
    name: 'Brain Tumor Categorical Classifier',
    description:
      'Uses Convolutional Neural Networks (CNNs) to analyze MRI scans and classify them according to tumor type. Achieves strong predictive classification (validation accuracy: 63%, test accuracy: 69%, F1-Score: 0.857) using TensorFlow, Keras, and a pre-trained EfficientNetB0 architecture with advanced image preprocessing.',
    links: [
      { href: 'https://github.com/mattbarty/brain-tumour-categorical-classifier', label: 'Github' }
    ],
    gif: 'https://dixog9cdtdsmc.cloudfront.net/projects/brain-disease-classifier-demo.gif',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV (cv2)', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'PIL']
  },
  {
    name: 'GenAI Augmented Product Design & Marketing Campaign',
    description:
      'Established proof-of-concept for AI-assisted product design that improved efficiency and creativity using local Stable Diffusion and Photoshop. Led campaign gathering designer feedback on AI integration and produced marketing content demonstrating AI-augmented design capabilities.',
    links: [
      {
        href: 'https://www.linkedin.com/posts/ttp-product-and-technology-consultancy_generativediffusion-aiintegration-productdevelopment-activity-7174018764328325122-DYr6?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin (Part 1 - Intro & Overview)'
      },
      {
        href: 'https://www.linkedin.com/posts/ttp-product-and-technology-consultancy_generativediffusion-aiintegration-productdevelopment-activity-7179090272721502208-9qoy?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin (Part 2 -Industrial Designer Interview)'
      },
      {
        href: 'https://www.linkedin.com/posts/ttp-product-and-technology-consultancy_generativediffusion-aiintegration-productdevelopment-activity-7184474042161098752-hBR7?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin (Part 3 - Product Designer Interview)'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/sdps-demo.mp4',
    technologies: ['Stable Diffusion', 'Photoshop', 'auto-photoshop-stable-diffusion-plugin (Open-source)', 'Digital Painting']
  },
  {
    name: 'Hacking my Roomba to avoid cables',
    description:
      'We hack some electronics and cutting-edge multi-modal models to teach my Roomba into avoiding cables.',
    links: [
      { href: 'https://youtu.be/IqqvarZpZTM?t=299', label: 'Youtube' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/gobby-demo.mp4',
    technologies: ['OpenCV (cv2)', 'Arduino (C++)', 'Hardware Hacking', 'Python', 'Replicate', 'LLaVa']
  },
  {
    name: 'Augmented Reality, Real-Time Sudoku Solver',
    description:
      'Trained OCR model on MNIST dataset to recognize handwritten digits in Sudoku puzzles. Features real-time grid detection with perspective transformation, efficient backtracking solver with threading, and AR interface that overlays solutions onto the original puzzle in live camera view.',
    links: [
      { href: 'https://github.com/mattbarty/cv_sudoku_solver', label: 'Github' },
      { href: 'https://www.linkedin.com/posts/mattbarty_machinelearning-tensorflow-artificialintelligence-activity-7101517894634586112-Kf8X?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/sudoku-solver-demo.mp4',
    technologies: ['Python', 'TensorFlow', 'OpenCV (cv2)', 'matplotlib', 'NumPy', 'PIL']
  },
  {
    name: 'ArcanaGPT (Figma Prototype)',
    description:
      'LLM-enabled Tarot webapp 🃏 Assets generated with Midjourney, interface designed and protoyped in Figma.',
    links: [
      {
        href: '/blog/case-study-arcanagpt',
        label: 'mattbarty.com/blog'
      },
      {
        href: 'https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602',
        label: 'Figma'
      },
      {
        href: 'https://www.linkedin.com/posts/mattbarty_figmadesign-figma-midjourney-activity-7103756584387792896-0G7n?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/arcanaGPT.mp4',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'LLM Integration', 'Design Thinking']
  },
  {
    name: 'Ideas to Domains (GPT-3.5 + GoDaddy)',
    description:
      'A webapp that uses GPT-3.5 and GoDaddy API to generate clever domain names based on your idea description.',
    links: [
      { href: 'https://domain-sprout.vercel.app/', label: 'Demo - (domain-sprout.vercel.app)' },
      { href: 'https://www.linkedin.com/posts/matthew-barty_turn-your-ideas-into-clever-domains-instantly-activity-7175056135220015104-Ghgo?utm_source=share&utm_medium=member_desktop', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/domainsprout-demo.mp4',
    technologies: ['GPT-3.5', 'React', 'GoDaddy API', 'NextJS', 'API Integration']
  },
  {
    name: 'WhatsApp Language Extension',
    description:
      'Augmenting WhatsApp web with language features, specfically an auto-translate feature with scope to add other features in the future.',
    links: [
      {
        href: 'https://www.linkedin.com/posts/matthew-barty_developercommunity-developer-whatsapp-activity-7079777301743181826-bfDI?utm_source=share&utm_medium=member_desktop',
        label: 'Linkedin'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/whatsapp-1-demo.mp4',
    technologies: ['Chrome Extension', 'JavaScript', 'OpenAI API', 'TailwindCSS']
  },
  {
    name: 'Satori - AI-Generated Meditations',
    description:
      'Generate bespoke, fully-voiced meditations using GPT-4o and AWS Polly',
    links: [
      { href: 'https://satori-iota.vercel.app/', label: 'Demo - (satori-iota.vercel.com)' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/satori-demo.mp4',
    technologies: ['GPT-4o', 'AWS Polly', 'Next.js', 'React', 'Vercel', 'Text-to-Speech']
  },
  {
    name: 'Versius - Surgical Robotics',
    description:
      'My usability and clinical data science work on the next generation of surgical robotics.',
    links: [
      { href: 'https://www.mattbarty.com/blog/my-work-on-versius', label: 'mattbarty.com/blog' },
      { href: 'https://cmrsurgical.com/', label: 'CMRsurgical.com' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/VersiusPage-FinalBanner-xCompressed.mp4',
    technologies: ['Surgical Robotics', 'Usability Research', 'Data Science', 'Healthcare Technology']
  },
  {
    name: 'GenPersona - AI-Generated Personas',
    description:
      'Generate the perfect user personas for your project using GPT-4o',
    links: [
      { href: 'https://genpersona.vercel.app/', label: 'Demo - (genpersona.vercel.app)' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/genpersona-demo.mp4',
    technologies: ['GPT-4o', 'Next.js', 'React', 'UX Research', 'UI Design']
  },
  {
    name: 'LinkedInfluencer.app',
    description:
      'WebApp that uses BLIP-2 and GPT-3.5 to generate parody LinkedIn posts.',
    links: [
      { href: 'https://linkedinfluencer-one.vercel.app/', label: 'Demo - (linkedinfluencer.app)' },
      { href: 'https://www.linkedin.com/posts/mattbarty_ai-project-webdev-activity-7063114429814460416-kxOI?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/linkedinfluencer-demo.mp4',
    technologies: ['BLIP-2', 'GPT-3.5', 'Next.js', 'React', 'Computer Vision', 'UX Design']
  },
  {
    name: 'Wordle Bot',
    description:
      'Using python, some complex algorithms, and a webdriver to hack a real-world, online Wordle game.',
    links: [
      { href: 'https://github.com/mattbarty/wordle-bot', label: 'Github' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/wordle-bot.mp4',
    technologies: ['Python', 'Selenium', 'Algorithm Design', 'Web Automation']
  },
  {
    name: 'AI-Powered Art Workflow',
    description:
      'Combining Midjourney, Stable Diffusion, and Photoshop GenAI models to rapidly create digital art.',
    links: [
      {
        href: 'https://www.linkedin.com/posts/mattbarty_rediscovering-my-passion-for-digital-art-activity-7102626220818714624-XFAz?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/art-art-demo.mp4',
    technologies: ['Midjourney', 'Stable Diffusion', 'Photoshop', 'Digital Art', 'AI Art']
  },
  {
    name: 'Data Exploration & Visualisation Tutorial',
    description:
      'A walkthrough tutorial demonstrating how to scrape data from IMDB.com. (ep. 2 of 2)',
    links: [
      {
        href: 'https://youtu.be/SQ4NgT3jDkE?t=1407',
        label: 'Youtube'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/data-viz.mp4',
    technologies: ['Python', 'Data Visualization', 'Pandas', 'Educational Content', 'Data Analysis']
  },
  {
    name: 'Webscrapping Tutorial',
    description:
      'A walkthrough tutorial demonstrating how to scrape series data from IMDB.com (ep. 1 of 2).',
    links: [
      {
        href: 'https://youtu.be/qNfxUsQ70QU',
        label: 'Youtube'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/imdb-scraper.mp4',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests', 'Educational Content']
  },
  {
    name: 'Pokemon Sprites Data Visualisation',
    description:
      'Visualising Pokemon data using sprite art.',
    links: [
      {
        href: 'https://www.kaggle.com/code/mattbarty/gotta-plot-em-all',
        label: 'Kaggle'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/plotemall-demo.mp4',
    technologies: ['Python', 'Data Visualization', 'Matplotlib', 'Pandas', 'Creative Coding']
  },
  {
    name: 'Eye Disease Classifier (ML)',
    description:
      'Training a DNN to diagnose my own retina scan.',
    links: [
      { href: 'https://github.com/mattbarty/eye_diseases_classification', label: 'Github' }
    ],
    gif: 'https://dixog9cdtdsmc.cloudfront.net/projects/eye-disease-classification-demo.gif',
    technologies: ['Deep Learning', 'TensorFlow', 'Medical Imaging', 'CNN', 'Healthcare AI']
  },
  {
    name: 'AI-Generated & Narrated Short Story',
    description:
      'A demo that combines cutting-edge LLM, Image Diffusion, and text-to-voice models to tell an entirely original horror story.',
    links: [
      { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7110525573034033153/', label: 'Linkedin' }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/ai-story-demo.mp4',
    technologies: ['LLM', 'Text-to-Speech', 'Stable Diffusion', 'Storytelling', 'Creative AI']
  },
  {
    name: 'ControlNet Portraits',
    description:
      'Using Stable Diffusion to create portraits of myself.',
    links: [
      {
        href: 'https://www.linkedin.com/posts/mattbarty_stablediffusion-ai-aiartwork-activity-7065698539477069825-KI9h?utm_source=share&utm_medium=member_desktop&rcm=ACoAABlTUP0BDc6N7ahE4r8ixV-h2IiFgCVH1tk',
        label: 'Linkedin'
      }
    ],
    video: 'https://dixog9cdtdsmc.cloudfront.net/projects/stable-diffusion-portrait-demo.mp4',
    technologies: ['Stable Diffusion', 'ControlNet', 'AI Art', 'Portrait Generation']
  },
];

export function ProjectsList() {
  return (
    <SimpleLayout
      title="Things I've built"
      intro="A lot of what I do is highly confidential and usually pretty serious. However, that doesn't mean I don't experiment, build, and learn a bunch of things in my spare time - Here are some personal projects I'm proud to share!"
    >
      {/* Projects Grid - Horizontal layout on desktop */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-2 gap-y-2"
      >
        {projects.map((project, index) => (
          <Card
            as="li"
            key={project.name}
            className={clsx(
              "flex flex-col md:flex-row md:items-start md:gap-x-2",
              "rounded-[14px] px-2 py-6 border-b border-zinc-800"
            )}
          >
            {/* Media container - Takes full width on mobile, fixed width on desktop */}
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black aspect-square w-full md:w-[280px] lg:w-[280px] xl:w-[280px] 2xl:w-[280px] flex-shrink-0 overflow-clip hover:opacity-90 transition-opacity"
            >
              {project.video ? (
                <LazyVideoCard
                  src={project.video}
                  priority={index < 3}
                />
              ) : project.gif ? (
                <img
                  src={project.gif}
                  alt=""
                  loading={index < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={'/images/avatar.jpg'}
                  alt=""
                  className="w-full h-full object-cover"
                  unoptimized
                  loading={index < 3 ? "eager" : "lazy"}
                  width={280}
                  height={280}
                />
              )}
            </a>

            {/* Content container - Takes full width on mobile, flexible width on desktop */}
            <div className="flex-grow flex flex-col mt-6 md:mt-0 md:ml-6">
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="text-xl font-semibold text-zinc-100 hover:text-teal-400 transition-colors">
                  {project.name}
                </h2>
              </a>

              <CardDescription className="mt-2 text-base flex-grow">{project.description}</CardDescription>

              {project.technologies && (
                <div className="relative z-10 mt-2 flex flex-wrap">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-zinc-800 text-zinc-300 px-2 py-1 text-xs rounded-[4px] mr-1 mb-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links section */}
              <div className="flex flex-col items-start gap-4 mt-4">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-zinc-200 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 flex-none" />
                    <span className="ml-2">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
} 