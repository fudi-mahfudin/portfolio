'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PROFILE_DATA } from '@/data';
import Navbar from './navbar';
import MobileNav from './mobile-nav';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', changeBackground);

    return () => {
      document.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between px-8',
        'bg-background/30 shadow-xs rounded-2xl saturate-100 background-blur-[10px] transition-colors',
        isScrolled && 'bg-black/80'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="#skip-nav"
        className={cn(
          '-translate-y-20 bg-background fixed left-4 top-4 border p-2 font-medium rounded-xs shadow-xs',
          'focus-visible:ring-ring focus-visible:translate-y-0 focus-visible:ring-3 focus-visible:ring-offset-2 transition-transform'
        )}
      >
        Skip to main content
      </Link>
      <Link href="/" aria-label="Home">
        <Image src={PROFILE_DATA.logo_src} alt="" height={35} />
      </Link>
      <div className="flex items-center gap-2">
        <Navbar />
        {/* TODO: ThemeSwitcher */}
        {/* TODO: CommandMenu */}
        <MobileNav />
      </div>
    </motion.header>
  );
}
