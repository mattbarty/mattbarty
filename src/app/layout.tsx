import { type Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react";
import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Matt Barty',
    default:
      'Matt Barty - UX Engineer & Creative Technologist',
  },
  description:
    "Hey! I'm Matt Barty, a UX Engineer & Creative Technologist based in Cambridge, UK. I’m passionate about building inclusive, accessible and performant experiences",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
