'use client';

import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import VideoCard, { VideoCardList } from '../ui-local/video-card';
import { ALL_PROJECTS } from '@/config';

const variants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function SelectedProjects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });
  const mainProject = ALL_PROJECTS.find((project) => project.autoplay)!;
  const selectedProjects = ALL_PROJECTS.filter(
    (project) => project.featured && !project.autoplay
  );

  return (
    <motion.div
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={projectsRef}
      transition={{
        duration: 0.5,
      }}
      className="relative my-24"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Lets have a look at my&nbsp;
        <span className="text-special">Projects</span>
      </motion.h2>
      <motion.div
        className="mt-12 grid"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <VideoCard project={mainProject} active />
      </motion.div>

      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <VideoCardList projects={selectedProjects} />
      </motion.div>

      <div className="my-8 flex items-center justify-center">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
        >
          See all project
        </Link>
      </div>
    </motion.div>
  );
}
