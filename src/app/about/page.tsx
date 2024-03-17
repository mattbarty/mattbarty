'use client';

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

  const stopPropagation = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (



    <li className={clsx(className, 'flex')}>
      <Link legacyBehavior href={href}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group flex text-sm font-medium  transition text-zinc-300 hover:text-teal-500"
          onClick={stopPropagation}
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </a>
      </Link >
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

Card.VideoAutoplay = function VideoLink({ src, ...props }: { src: string; }) {
  return (
    <video
      className='w-full h-full object-cover z-100'
      loop
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%" }}
      {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className='w-full relative flex lg:justify-end h-full items-center'>
        <div className='absolute w-full h-full rounded-lg bg-[rgba(0,0,0,0.6)] md:bg-[rgba(0,0,0,0.3)] p-4 lg:rounded-l-md lg:w-auto lg:h-auto z-10'>
          <div className='flex flex-col h-full justify-center md:justify-around w-full z-50 max-w-lg'>
            <h1 className="text-4xl font-bold tracking-tight  text-zinc-100 sm:text-5xl">
              Hey There!<br />
            </h1>
            <p className='text-xl sm:text-2xl font-light text-zinc-100 mt-2'><span className='font-semibold'>I'm Matt</span> - And I work on some of the best systems in the world.</p>
          </div>
        </div>
        <div className='bg-black overflow-clip w-full aspect-[3/2] md:aspect-auto rounded-md'>
          < Card.VideoAutoplay src={'https://dixog9cdtdsmc.cloudfront.net/hero-banner-2-compressed.mp4'} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="md:max-w-xs px-2.5 lg:max-w-none">
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="mt-6 space-y-7 text-base  text-zinc-400">
            <p>At heart, I'm a <span className='font-semibold text-zinc-300'>Creative Technologist</span> with a love for design, technology, and making a difference. My profound passion for creating has had me wear many hats, and shaped me into a <span className='font-semibold text-zinc-300'>prolific problem solver.</span></p>
            <p className='flex'>- Check out my&nbsp;
              <a
                href='./pdf/matthew_barty_resume_2024.pdf'
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-teal-200 text-teal-400 font-semibold hover:undezinc-200 underline-offset-2'>
                Resume
              </a>&nbsp;for the specifics.</p>
            <p>Professionally, I've worked as a <span className='font-semibold text-zinc-300'>UX Engineer</span> and <span className='font-semibold text-zinc-300'>Data Scientist</span> on some of the most exciting <span className='font-semibold text-zinc-300'>MedTech systems</span> in the world (including surgical robots, neurological implants, digital health, implants and prostheses, etc.)</p>
            <p>I'm also a <span className='font-semibold text-zinc-300'>Full-Stack Web Developer, Tinkerer, Videographer, Graphics Artist, Oil Painter</span>, and aspiring <span className='font-semibold text-zinc-300'>Coffee Snob</span> ☕️🤔 - I showcase and document my work on my&nbsp;
              <Link
                href={'/projects'}
                className='hover:text-teal-200 text-teal-400 font-semibold hover:undezinc-200 underline-offset-2'
              >projects
              </Link>
              &nbsp;or&nbsp;
              <Link
                href={'/blog'}
                className='hover:text-teal-200 text-teal-400 font-semibold hover:undezinc-200 underline-offset-2'
              >blog
              </Link>
              &nbsp;pages - Check 'em out!</p>
            <p>Thanks for stopping by, do reach out if you have any questions! 😄</p>
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
    </Container >
  );
}