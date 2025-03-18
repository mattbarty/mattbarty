import { Container } from '@/components/Container';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
} from '@/components/SocialIcons';
import Image from 'next/image';
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

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: React.ReactNode;
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        {/* <div className='h-[6rem] md:h-[9rem] mb-8 -translate-y-[4rem] inset-20'>
          <Link href='/about'>
            <div className='h-[160px] w-[160px] md:h-[200px] md:w-[200px] rounded-full overflow-clip 
            border-2 border-zinc-600'>
              <Image src='https://dixog9cdtdsmc.cloudfront.net/avatar.jpg' alt="" className=" object-cover hover:scale-105 transition-all hover:opacity-70" width={500} height={500} unoptimized />
            </div>
          </Link>
        </div> */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Matt Barty<br />
          </h1>
          <p className='font-thin text-xl md:text-2xl text-zinc-100'>UX Engineer | Data Scientist | Applied AI</p>
          <div className="flex flex-col gap-2 mt-6 text-base text-zinc-400">
            <p>My professional work is usually confidential MedTech stuff, but I still find time to experiment, build, and learn when I can - Here are some projects I'm proud to share!</p>
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
              href="https://www.linkedin.com/in/mattbarty/"
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
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}
