import Link from 'next/link';
import clsx from 'clsx';

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

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T;
  className?: string;
}) {
  let Component = as ?? 'div';

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
}

Card.VideoAutoplay = function VideoLink({ src, ...props }: { src: string; }) {
  return (
    <video
      className='w-full h-full object-cover aspect-square'
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

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 
      transition group-hover:scale-100 group-hover:opacity-100 
      bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  target,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T;
  href?: string;
  target?: string;
}) {
  let Component = as ?? 'h2';

  return (
    <Component className="text-base font-semibold tracking-tight  text-zinc-100">
      {
        href && target ? <Card.Link href={href} target={target}>{children}</Card.Link> :
          href ? <Card.Link href={href}>{children}</Card.Link> :
            children
      }
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm  text-zinc-400">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children, className }: { children: React.ReactNode; className?: string; }) {
  return (
    <div
      aria-hidden="true"
      className={
        clsx(
          className, "relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500")}
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T;
  decorate?: boolean;
}) {
  let Component = as ?? 'p';

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm  text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full  bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
