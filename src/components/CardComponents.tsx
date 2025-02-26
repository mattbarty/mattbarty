'use client';

import { Card } from '@/components/Card';
import { type ReactNode, type ElementType } from 'react';

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
  return (
    <Card.Title as={as} href={href} target={target}>
      {children}
    </Card.Title>
  );
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
  return (
    <Card.Eyebrow
      as={as}
      decorate={decorate}
      className={className}
      dateTime={dateTime}
      {...props}
    >
      {children}
    </Card.Eyebrow>
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