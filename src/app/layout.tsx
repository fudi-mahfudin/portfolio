import type { Metadata } from 'next';
import { Bricolage_Grotesque, Oswald } from 'next/font/google';
import '../styles/globals.css';
import { APP_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { PROFILE_DATA } from '@/data';

const MainFont = Bricolage_Grotesque({ subsets: ['latin'] });
const OswaldFont = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const PixelFont = localFont({
  src: '../fonts/pixel-font-7.ttf',
  variable: '--font-pixel',
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
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswaldFont.variable,
          PixelFont.variable,
          'antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
