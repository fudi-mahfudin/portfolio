'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import StacksCard from './stacks-card';
import LocationCard from './location-card';
import Connect from './connect';
import CodingHours from './coding-hours';
import FavoriteFramework from './favorite-framework';

const variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function AboutMe() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{ duration: 0.5 }}
      className="relative my-24"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Know more&nbsp;
        <span className="text-special">About me</span>
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="grid gap-4">
          <Connect />
          <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
            <CodingHours />
            <FavoriteFramework />
          </div>
        </div>
      </motion.div>
      {/* <div className="my-8 flex items-center justify-center">
        <Link
          href="/about"
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
        >
          Know more about me
        </Link>
      </div> */}
    </motion.div>
  );
}
