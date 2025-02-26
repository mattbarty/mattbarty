'use client';

import { Card } from '@/components/Card';
import { type ReactNode, type ElementType } from 'react';
import clsx from 'clsx';

// Wrapper for Card.Title
export function CardTitle<T extends ElementType = 'h2'>({
  as,
  href,
  target,
  children,
}: {
  as?: T;
  href?: string;
  target?: string;
  children: ReactNode;
}) {
  const Component = as ?? 'h2';

  if (href && target) {
    return (
      <Component className="text-base font-semibold tracking-tight text-zinc-100">
        <Card.Link href={href} target={target}>
          {children}
        </Card.Link>
      </Component>
    );
  } else if (href) {
    return (
      <Component className="text-base font-semibold tracking-tight text-zinc-100">
        <Card.Link href={href}>
          {children}
        </Card.Link>
      </Component>
    );
  } else {
    return (
      <Component className="text-base font-semibold tracking-tight text-zinc-100">
        {children}
      </Component>
    );
  }
}

// Wrapper for Card.Description
export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card.Description className={className}>
      {children}
    </Card.Description>
  );
}

// Wrapper for Card.Cta
export function CardCta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card.Cta className={className}>
      {children}
    </Card.Cta>
  );
}

// Wrapper for Card.Eyebrow
export function CardEyebrow<T extends ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  dateTime,
  ...props
}: {
  as?: T;
  decorate?: boolean;
  className?: string;
  children: ReactNode;
  dateTime?: string;
  [key: string]: any;
}) {
  const Component = as ?? 'p';

  // Create a props object without dateTime if Component is not 'time'
  const componentProps = { ...props };
  if (dateTime && Component === 'time') {
    componentProps.dateTime = dateTime;
  }

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...componentProps}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
}

// Wrapper for Card.Link
export function CardLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: ReactNode;
  [key: string]: any;
}) {
  return (
    <Card.Link href={href} {...props}>
      {children}
    </Card.Link>
  );
}

// Wrapper for Card.TechTag
export function CardTechTag({
  technology,
}: {
  technology: string;
}) {
  return (
    <Card.TechTag technology={technology} />
  );
}

// Wrapper for Card.TechTags
export function CardTechTags({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <Card.TechTags technologies={technologies} />
  );
} 