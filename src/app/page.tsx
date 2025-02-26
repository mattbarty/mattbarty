import { redirect } from 'next/navigation';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { VideoCard } from '@/components/VideoCard';
import { CardTitle, CardDescription, CardCta } from '@/components/CardComponents';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
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
        <span className="bg-zinc-900 pr-3 text-xl font-semibold leading-6 text-zinc-400">{title}</span>
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
  // Redirect to projects page
  redirect('/projects');

  // The code below won't execute due to the redirect
  return (
    <>
      <Container className="mt-9">
        <div className='h-[6rem] md:h-[9rem] mb-8 -translate-y-[4rem] inset-20'>
          <Link href='/about'>
            <div className='h-[160px] w-[160px] md:h-[200px] md:w-[200px] rounded-full overflow-clip 
            border-2 border-zinc-600'>
              <Image src='https://dixog9cdtdsmc.cloudfront.net/avatar.jpg' alt="" className=" object-cover hover:scale-105 transition-all hover:opacity-70" width={500} height={500} unoptimized />
            </div>
          </Link>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Matt Barty<br />
          </h1>
          <p className='font-thin text-xl md:text-2xl text-zinc-100'>UX Engineer | Data Scientist | Applied AI</p>
          <div className="flex flex-col gap-2 mt-6 text-base text-zinc-400">
            <p>8 years of cross-functional experience in product development in the HealthTech sector ✨</p>
            <p>I proudly research, design, develop, and test complex and wonderful products - Including surgical robots, neurostim implants, satellite and comms, AI powered applications, and more! <br /> ( <span className='italic font-thin'>And just when you thought you knew me - I also love videography, painting, coding, the outdoors and coffee</span> ☕️ ) </p>
          </div>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="mailto:matthew.barty@outlook.com"
              icon={MailIcon}
              className="hover:fill-teal-400"
            >
              matthew.barty@outlook.com
            </SocialLink>
            <SocialLink
              href="https://github.com/mattbarty"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              className='hover:fill-teal-400'
            />
            <SocialLink
              href="https://www.linkedin.com/in/matthew-barty/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              className='hover:fill-teal-400'
            />
            <SocialLink
              href='https://www.youtube.com/@mattbarty'
              aria-label="Download Resume"
              icon={YouTubeIcon}
              className='hover:fill-teal-400'
            />
          </div>
        </div>
        <Divider title='Blog Posts' />
        <Link
          aria-hidden="true"
          href="/blog"
          className="relative z-10 flex flex-col text-sm font-medium text-teal-500 hover:text-teal-300"
        >
          <div className='flex items-center'>
            <p className='text-base'>See more blog posts</p>
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </div>
        </Link>
        <div className='grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip mb-2 w-full'>
              <VideoCard src={'https://dixog9cdtdsmc.cloudfront.net/VersiusPage-FinalBanner-xCompressed.mp4'} />
            </div>
            <div className='my-2'></div>
            <CardTitle href={`/blog/my-work-on-versius`}>
              My work on Versius
            </CardTitle>
            <CardDescription>
              I worked as a Human Factors Engineer and Clinical Data Scientist
              on a next-gen surgical robotic system, Versius. Versius
              is designed to be portable, modular, and cost-effective - Transforming surgery, for good.
            </CardDescription>
            <CardCta className='text-gray-500'>Read article</CardCta>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip mb-2 w-full'>
              <VideoCard src={'https://dixog9cdtdsmc.cloudfront.net/projects/arcanaGPT.mp4'} />
            </div>
            <div className='my-2'></div>
            {/* <Card.Title href={`/articles/how-i-work`}> */}
            <CardTitle href={`/blog/case-study-arcanagpt`}>
              ArcanaGPT - UX Case Study
            </CardTitle>
            <CardDescription>
              ArcanaGPT merges Tarot Tradition with Cutting-Edge AI -
              In this case study I discuss how I use designing thinking and UXR/D techniques
              to create an experience that is accessible, intuitive, and most importantly - Fun!
            </CardDescription>
            <CardCta>Read article </CardCta>
          </Card>
        </div>


        <Divider title='Projects Highlights' />
        <Link
          aria-hidden="true"
          href="/projects"
          className="relative z-10 flex flex-col text-sm font-medium text-teal-500 hover:text-teal-300"
        >
          <div className='flex items-center'>
            <p className='text-base mt-1'>See more projects</p>
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </div>
        </Link>
        <div className='grid max-w-xl grid-cols-1 gap-y-8 lg:max-w-none lg:grid-cols-3 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <VideoCard src={'https://dixog9cdtdsmc.cloudfront.net/projects/sudoku-solver-demo.mp4'} />
            </div>
            <CardTitle
              href={`https://github.com/mattbarty/cv_sudoku_solver`}
              target='_blank'>
              CV Sudoku Solver
            </CardTitle>
            <CardDescription>
              Using computer vision to solve physical sudoku puzzles in realtime.
              built using my own CNN model written in Python, using OpenCV, TensorFlow,
              and Numpy.
            </CardDescription>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">github.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <VideoCard src={'https://dixog9cdtdsmc.cloudfront.net/projects/gobby-demo.mp4'} />
            </div>
            <CardTitle
              href={`https://youtu.be/IqqvarZpZTM?t=299`}
              target='_blank'>
              Hacking my Roomba to avoid cables
            </CardTitle>
            <CardDescription>
              We use hacky electronics and and a CV model to teach my Roomba into avoiding cables, which it usually loves to
              eat and then complain about. The results were... mixed!
            </CardDescription>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">youtube.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[5/5] overflow-clip mb-2'>
              <VideoCard src={'https://dixog9cdtdsmc.cloudfront.net/projects/whatsapp-1-demo.mp4'} />
            </div>
            <CardTitle
              href={`https://www.linkedin.com/posts/matthew-barty_developercommunity-developer-whatsapp-activity-7079777301743181826-bfDI?utm_source=share&utm_medium=member_desktop`}
              target='_blank'
            >
              WhatsApp Language Extension
            </CardTitle>
            <CardDescription>
              A chrome extension that augments whatsapp.web with live translations.
              The idea was to make language learning more ambient and personally-relevant to me, my interests, and my language-level.
            </CardDescription>
            <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">linkedin.com</span>
            </p>
          </Card>
        </div>
      </Container>
    </>
  );
}
