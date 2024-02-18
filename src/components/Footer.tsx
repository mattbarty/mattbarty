import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/Container';

function OpenFileIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      height="1em"
      viewBox="0 0 512 512"
      {...props}>
      <path
        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t pb-16 pt-10 border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <a
                  href='/docs/matthew_barty_resume_2023.pdf'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group relative flex transition items-center hover:text-teal-400 '>
                  Resume
                  <OpenFileIcon className='h-3 w-3 transition  fill-zinc-200 ml-2  group-hover:fill-teal-400' />
                </a>
                {/* <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <p className="text-sm  text-zinc-500">
                &copy; {new Date().getFullYear()} Matt Barty. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
