import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Card } from '@/components/Card';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
} from '@/components/SocialIcons';
import ResumeButton from '@/components/ResumeButton';

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string; }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium  transition text-zinc-200 hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Matt Barty - I build cool things and solve hard problems.',
};

Card.VideoAutoplay = function VideoLink({ src, ...props }: { src: string; }) {
  return (
    <video
      className='w-full h-full object-cover z-100'
      loop
      autoPlay
      muted
      playsInline
      controls
      style={{ width: "100%", height: "100%" }}
      {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="md:max-w-xs px-2.5 lg:max-w-none">
            <Image
              src='https://dixog9cdtdsmc.cloudfront.net/avatar.jpg'
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl object-cover bg-zinc-800"
              width={320}
              height={320}
            />
            {/* <div className='w-full'>
              < Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/projects/stable-diffusion-portrait-demo.mp4'} />
              <p
                className='text-zinc-100 italic text-xs mt-2 block transition'>
                * Portraits generated using StableDiffusion Model with ControlNet framework <a
                  target='_blank'
                  href="https://www.linkedin.com/posts/matthew-barty_stablediffusion-ai-aiartwork-activity-7065698539477069825-eaZ8?utm_source=share&utm_medium=member_desktop'"
                  className='text-teal-500 hover:underline transition hover:font-bold '
                >(see project)</a>.
              </p>
            </div> */}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight  text-zinc-100 sm:text-5xl">
            I’m Matt Barty - <br />
          </h1>
          <p className='text-2xl sm:text-4xl text-thin text-zinc-100'>Building cool things, solving hard problems ✨</p>
          <div className="mt-6 space-y-7 text-base  text-zinc-400">
            <p>
              I love design, technology, and people.
            </p>
            <p>
              At heart, I'm a UX engineer. However, necessity, experience, and a profound
              passion for creating has also shaped me into a skilled product designer, software engineer, and data scientist.
              I thrive on building products that keep people engaged, healthy, and happy.
            </p>
            <p>
              With a background in UX research and design, I have a deep understanding of the
              user-centered design process. My background in software engineering and data science
              gives me technical perspective and the ability to build and analyze complex systems.
            </p>
            <p>
              I've mainly worked in the MedTech industry, developing hardware and software for
              a breadth of medical devices, including: consumer diagnostic devices,
              drug delivery devices, therapeutic implants, and a world-class surgical robotics system (Versius).
            </p>
            <p>
              Professionally, I work as a UX & Human Factors Consultant in Cambridge, UK. In my spare time,
              I play with emerging technology and work on <i className=' font-bold'>a lot </i>of personal projects.
            </p>
            <p>
              If you've got a cool idea, let me know - Let's grab coffee and talk about it! ☕️
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/mattbarty"
              icon={GitHubIcon}
              aria-label="Follow on GitHub"
              className="mt-4">
              Follow on GitHub
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/matthew-barty/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              className="mt-4">
              Follow on LinkedIn
            </SocialLink>

            {/* <SocialLink
              href="https://mattbarty.medium.com"
              aria-label="Follow on Medium"
              icon={MediumIcon}
              className='mt-4'>
              Follow on Medium
            </SocialLink> */}

            <SocialLink
              href="mailto:matthew.barty@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 border-zinc-700/40"
            >
              matthew.barty@outlook.com
            </SocialLink>
            <ResumeButton className='mt-12' />
          </ul>
        </div>
      </div>
    </Container>
  );
}
