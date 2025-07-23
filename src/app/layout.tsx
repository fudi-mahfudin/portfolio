import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { PROFILE_DATA } from '@/data';
import { APP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';

const fontSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const fontMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: PROFILE_DATA.meta_title,
  description: PROFILE_DATA.meta_description,
  keywords: PROFILE_DATA.meta_keywords,
  creator: PROFILE_DATA.name,
  openGraph: {
    type: 'website',
    url: APP_URL,
    title: PROFILE_DATA.meta_title,
    description: PROFILE_DATA.meta_description,
    siteName: PROFILE_DATA.meta_title,
    images: PROFILE_DATA.og_image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable, fontMono.variable, 'overflow-y-scroll')}>
      <body className="relative flex min-h-screen flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
