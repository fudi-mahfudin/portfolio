'use client';

import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import Button from '../ui/button';
import { MdOpenInNew } from 'react-icons/md';
import { LuFullscreen } from 'react-icons/lu';
import { Featured } from '@/lib/types';

interface Props {
  active?: boolean;
  featured: Featured;
}

export default function Video({ active, featured }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
        <video
          src={featured.video}
          ref={videoRef}
          loop={active}
          controls={false}
          muted
          className={cn(
            'h-full w-full object-cover rounded-3xl',
            featured.position || 'object-top',
            active ? '' : 'grayscale'
          )}
        />
      </div>
      <div className="absolute bottom-3 right-3 flex gap-3">
        {featured.repository_url && (
          <Button
            className="bg-zinc-500 hover:bg-zinc-800"
            link={featured.repository_url}
          >
            Tech
            <BsGithub />
          </Button>
        )}
        {featured.live_url && (
          <Button
            className="bg-zinc-500 hover:bg-zinc-800"
            link={featured.live_url}
          >
            Live
            <MdOpenInNew />
          </Button>
        )}
        <Button
          className="bg-zinc-500 hover:bg-zinc-800"
          onClick={() => videoRef.current?.requestFullscreen()}
        >
          <LuFullscreen />
        </Button>
      </div>
    </>
  );
}
