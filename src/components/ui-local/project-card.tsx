'use client';

import { cn } from '@/lib/utils';
import { GithubIcon, SquareArrowOutUpRightIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { useState } from 'react';
import Link from 'next/link';
import Video from './video';
import { type Project } from '@/config';

interface ProjectCardProps {
  project: Project;
  active?: boolean;
}

function ProjectCard({
  project,
  active = false,
  ...props
}: ProjectCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const { name, description, stack, github, live } = project;

  return (
    <div
      className="shadow-feature-card group relative rounded-xl flex flex-col px-2 py-4"
      {...props}
    >
      <Video active={active} videoSrc={project.video} />

      <div className="flex flex-col flex-1 gap-4 px-2 py-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack?.map((stack) => (
            <div
              key={stack}
              className="rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900"
            >
              {stack}
            </div>
          ))}
        </div>
        <div className="mt-auto ml-auto space-x-2">
          {github && (
            <Link
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'rounded-xl'
              )}
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
              className={cn(
                buttonVariants({ variant: 'default' }),
                'rounded-xl'
              )}
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
    </div>
  );
}

function ProjectCardList({ projects }: { projects: Project[] }) {
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
        <ProjectCard
          key={project.name}
          project={project}
          active={hoveredIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </>
  );
}

export default ProjectCard;
export { ProjectCard, ProjectCardList };
