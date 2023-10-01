import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/SocialIcons';
import avatar from '@/images/avatar.jpg';
import logoAirbnb from '@/images/logos/airbnb.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoStarbucks from '@/images/logos/starbucks.svg';
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
        <div className="w-full border-t border-zinc-600 dark:border-zinc-400"></div>
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white dark:bg-zinc-900 pr-3 text-base font-semibold leading-6 text-zinc-600 dark:text-zinc-400">{title}</span>
      </div>
    </div>
  );
}
// stroke - zinc - 400 transition group - active: stroke - zinc - 600 dark: group - hover: stroke - zinc - 50 dark: group - active: stroke - zinc - 50;

function Article({ article }: { article: ArticleWithSlug; }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
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
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
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

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-9">
        <div className='h-[6rem] md:h-[9rem] mb-8 -translate-y-[4rem] inset-20'>
          <Image src={avatar} alt="" className=" object-cover h-[160px] w-[160px] md:h-[200px] md:w-[200px] rounded-full" unoptimized />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Matt Barty<br />
          </h1>
          <p className='font-thin text-xl md:text-3xl'>UX Engineer & Creative Technologist</p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            6 years of cross-functional experience in UXR/D, Data Science, and Programming ✨ -
            <br />
            Professionally I design, develop, and test complex MedTech products (hardware & software),
            but my passion lies in the intersection of technology, design, and human behaviour -
            Wherever that takes me 🚀
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/mattbarty"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/matthew-barty/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://mattbarty.medium.com"
              aria-label="Follow on Medium"
              icon={MediumIcon}
            />
          </div>
        </div>
        <Divider title='Professional work' />
        <div className='grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <Card.VideoAutoplay src={'videos/versius-demo.mp4'} />
            <div className='my-2'></div>
            <Card.Title href={`/articles/my-work-on-versius`}>
              My work on Versius
            </Card.Title>
            <Card.Description>
              I worked as a Human Factors Engineer and Clinical Data Scientist
              on a next-gen surgical robotic system, Versius. Versius
              is designed to be portable, modular, and cost-effective - Transforming surgery, for good.
            </Card.Description>
            <Card.Cta>Read article</Card.Cta>
          </Card>
          <Card as="article">
            <Card.VideoAutoplay src={'videos/collab-demo.mp4'} />
            <div className='my-2'></div>
            <Card.Title href={`/articles/how-i-work`}>
              How I design, develop, & lead in MedTech
            </Card.Title>
            <Card.Description>
              I've worked on a wide range of projects, from consumer diagnostics,
              chronic-disease management, therapeutic implants, surgical intervention
              & imaging equipment, and a world-class surgical robotic system (Versius).
            </Card.Description>
            <Card.Cta>Read article</Card.Cta>
          </Card>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <Divider title='Personal projects' />
        <div className='grid max-w-xl grid-cols-1 gap-y-6 lg:max-w-none lg:grid-cols-3 gap-0 md:gap-12 mt-24 md:mt-28'>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip'>
              <Card.VideoAutoplay src={'videos/sudoku-solver-demo.mp4'} />
            </div>
            <div className='my-2'></div>
            <Card.Title href={`https://github.com/mattbarty/cv_sudoku_solver`}>
              CV Sudoku Solver
            </Card.Title>
            <Card.Description>
              Using computer vision to solve physical sudoku puzzles in realtime.
              built using my own CNN model written in Python, using OpenCV, TensorFlow,
              and Numpy.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">github.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip'>
              <Card.VideoAutoplay src={'videos/arcanagpt-demo.mp4'} />
            </div>
            <div className='my-2'></div>
            <Card.Title href={`https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602&mode=design",
    "linkedInUrl": "https://www.linkedin.com/posts/matthew-barty_figmadesign-figma-midjourney-activity-7103756584387792896-J3Wr?utm_source=share&utm_medium=member_desktop`}>
              ArcanaGPT
            </Card.Title>
            <Card.Description>
              Tarot-inspired card game webapp prototype. Prototyped in Figma, this project
              uses GPT-3.5 to give users unique readings with all art assets generated using
              Midjourney.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">figma.com</span>
            </p>
          </Card>
          <Card as="article">
            <div className='bg-black aspect-[6/5] overflow-clip'>
              <Card.VideoAutoplay src={'videos/ai-art-demo.mp4'} />
            </div>
            <div className='my-2'></div>
            <Card.Title href={`https://www.linkedin.com/posts/matthew-bartsy_rediscovering-my-passion-for-digital-art-activity-7102626220818714624-gYiL?utm_source=share&utm_medium=member_desktop`}>
              AI-Driven Digital Art
            </Card.Title>
            <Card.Description>
              Leveraging modern AI tools to rapidly produce digital art - Combines the power of
              Adobe generative fill, Midjourney, and a opensource Stable Diffusion plugin.
            </Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
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
      </Container>

      <Container className="mt-24 md:mt-28">
        <Divider title='Resume' />
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-24 md:mt-28">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
