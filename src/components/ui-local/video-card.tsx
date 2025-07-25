'use client';

import { cn } from '@/lib/utils';
import { GithubIcon, SquareArrowOutUpRightIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { useState } from 'react';
import Link from 'next/link';
import Video from './video';
import { type Project } from '@/config';

interface VideoCardProps {
  project: Project;
  active?: boolean;
}

function VideoCard({ project, active = false }: VideoCardProps) {
  const { name, description, github, live } = project;

  return (
    <div className="shadow-feature-card group relative rounded-xl">
      <Video active={active} videoSrc={project.video} overlay />
      <div className="absolute bottom-6 left-7 flex flex-col transition-[left] ease-out group-hover:left-[30px] mr-14">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <p className="dark:text-muted-foreground mt-2 text-zinc-100 line-clamp-1">
          {description}
        </p>
      </div>
      <div className="absolute top-6 right-7 flex items-center gap-3 transition-opacity group-hover:opacity-100 opacity-0">
        {github && (
          <Link
            className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
            href={github}
            title="Open repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tech
            <GithubIcon />
          </Link>
        )}
        {live && (
          <Link
            className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl')}
            href={live}
            title="Open live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
            <SquareArrowOutUpRightIcon />
          </Link>
        )}
      </div>
    </div>
  );
}

function VideoCardList({ projects }: { projects: Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={project.name}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <VideoCard project={project} active={hoveredIndex === index} />
        </div>
      ))}
    </>
  );
}

export default VideoCard;
export { VideoCard, VideoCardList };
