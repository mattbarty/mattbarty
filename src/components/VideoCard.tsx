'use client';

import { Card } from '@/components/Card';

export function VideoCard({
  src,
  priority = false
}: {
  src: string;
  priority?: boolean;
}) {
  return (
    <div className="w-full h-full">
      <Card.VideoAutoplay
        src={src}
        priority={priority}
      />
    </div>
  );
}

export function LazyVideoCard({
  src,
  priority = false
}: {
  src: string;
  priority?: boolean;
}) {
  return (
    <div className="w-full h-full">
      <Card.LazyVideoAutoplay
        src={src}
        priority={priority}
      />
    </div>
  );
} 