import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

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

function Divider({ title }: { title: string; }) {
  return (
    <div className="relative mt-24 lg:mt-28">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-400"></div>
      </div>
      <div className="relative flex justify-start">
        <span className="bg-zinc-900 pr-3 text-base font-semibold leading-6 text-zinc-400">{title}</span>
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string; }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 flex-none fill-zinc-400 transition hover:fill-teal-500" />
    </Link>
  );
}

interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string; };
  end: string | { label: string; dateTime: string; };
}

function Role({ role }: { role: Role; }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs  text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs  text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className='w-full relative flex lg:justify-end h-full items-center'>
          <div className='absolute w-full h-full bg-[rgba(0,0,0,0.6)] p-4 lg:rounded-l-md lg:w-auto lg:h-auto z-10'>
            <div className='flex flex-col h-full justify-center md:justify-around w-full z-50 max-w-lg'>
              <Link
                href={`/about`}
                className=' '
              >
                <div className='group'>
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl z-10 group-hover:text-teal-400">
                    Matt Barty
                  </h2>
                  <div className='flex font-light text-lg lg:text-xl text-zinc-100 z-10 group-hover:text-teal-400 gap-2'>
                    <p className=''>UX Engineer |</p>
                    <p className='flex gap-2' ><span className='hidden sm:block'>Full-Stack</span> Developer |</p>
                    <p>Data Scientist</p>
                  </div>
                </div>
              </Link>
              <p className="mt-6 text-base text-zinc-400 z-10 hidden sm:block">
                My passion is learning, building, and teaching all things Tech ✨ - I'm also big into videography, painting, and coffee ☕️
              </p>
              <div className="mt-6 flex gap-6 items-center h-auto w-full justify-center md:justify-start">
                <Link
                  href={"/projects"}
                >
                  <div
                    className='bg-teal-500 text-zinc-100 px-4 py-2 rounded-md font-semibold transition hover:bg-teal-400 hover:text-zinc-200 z-10'
                  >See projects
                  </div>
                </Link>
                <div className='flex gap-4 bg-zinc-900 py-2 px-4 rounded-md'>
                  <SocialLink
                    href="mailto:matthew.barty@outlook.com"
                    icon={MailIcon}
                    className="z-10 hover:fill-teal-400"
                  >
                    matthew.barty@outlook.com
                  </SocialLink>
                  <SocialLink
                    href="https://github.com/mattbarty"
                    target='_blank'
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                    className='z-10 hover:fill-teal-400'
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/matthew-barty/"
                    target='_blank'
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                    className='z-10 hover:fill-teal-400'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black overflow-clip w-full aspect-[3/2] md:aspect-auto rounded-md'>
            < Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/hero-banner-2-compressed.mp4'} />
          </div>
        </div>
        <Divider title='Projects Highlights' />
        <div className='grid max-w-xl grid-cols-1 gap-y-6 lg:max-w-none lg:grid-cols-3 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/projects/sudoku-solver-demo.mp4'} />
            </div>
            <Card.Title
              href={`https://github.com/mattbarty/cv_sudoku_solver`}
              target='_blank'>
              CV Sudoku Solver
            </Card.Title>
            <Card.Description>
              Using computer vision to solve physical sudoku puzzles in realtime.
              built using my own CNN model written in Python, using OpenCV, TensorFlow,
              and Numpy.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">github.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/projects/arcanaGPT.mp4'} />
            </div>
            <Card.Title
              href={`https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602&mode=design`}
              target='_blank'>
              ArcanaGPT
            </Card.Title>
            <Card.Description>
              Tarot-inspired card game webapp prototype. Prototyped in Figma, this project
              uses GPT-3.5 to give users unique readings with all art assets generated using
              Midjourney.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">figma.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/projects/whatsapp-1-demo.mp4'} />
            </div>
            <Card.Title
              href={`https://www.linkedin.com/posts/matthew-barty_developercommunity-developer-whatsapp-activity-7079777301743181826-bfDI?utm_source=share&utm_medium=member_desktop`}
              target='_blank'
            >
              WhatsApp Language Extension
            </Card.Title>
            <Card.Description>
              A chrome extension that augments whatsapp.web with live translations.
              The idea was to make language learning more ambient and personally-relevant to me, my interests, and my language-level.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">linkedin.com</span>
            </p>
          </Card>
        </div>
        <div className='flex w-full justify-center mt-16'>
          <Link
            aria-hidden="true"
            href="/projects"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500 hover:text-teal-300"
          >
            See more projects
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </Link>
        </div>

        <Divider title='Case Study Articles' />
        <div className='grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip mb-2 w-full'>
              <Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/VersiusPage-FinalBanner-xCompressed.mp4'} />
            </div>
            <div className='my-2'></div>
            <Card.Title href={`/articles/my-work-on-versius`}>
              My work on Versius
            </Card.Title>
            <Card.Description>
              I worked as a Human Factors Engineer and Clinical Data Scientist
              on a next-gen surgical robotic system, Versius. Versius
              is designed to be portable, modular, and cost-effective - Transforming surgery, for good.
            </Card.Description>
            <Card.Cta className='text-gray-500'>Read article</Card.Cta>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip mb-2 w-full'>
              <Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/projects/arcanaGPT.mp4'} />
            </div>
            <div className='my-2'></div>
            {/* <Card.Title href={`/articles/how-i-work`}> */}
            <Card.Title href={`/articles/case-study-arcanagpt`}>
              ArcanaGPT - UX Case Study
            </Card.Title>
            <Card.Description>
              ArcanaGPT merges Tarot Tradition with Cutting-Edge AI -
              In this case study I discuss how I use designing thinking and UXR/D techniques
              to create an experience that is accessible, intuitive, and most importantly - Fun!
            </Card.Description>
            <Card.Cta>Read article </Card.Cta>
          </Card>
        </div>
      </Container>
    </>
  );
}
