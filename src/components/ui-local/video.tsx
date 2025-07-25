import { cn } from '@/lib/utils';
import { Maximize2Icon } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Button } from '../ui/button';

interface VideoProps {
  active?: boolean;
  videoSrc: string;
  overlay?: boolean;
}

export default function Video({
  active = false,
  videoSrc,
  overlay = false,
}: VideoProps) {
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
    <div className="rounded-xl group/video relative">
      <video
        src={videoSrc}
        ref={videoRef}
        loop={active}
        controls={false}
        muted
        className={cn('h-full w-full rounded-xl', active ? '' : 'grayscale')}
      />
      {overlay && (
        // <div className="absolute bottom-0 left-0 size-full bg-radial-[at_0%_100%] from-black/50 to-50% to-transparent rounded-xl group-hover/video:opacity-0 opacity-100 transition-opacity duration-[3000ms]" />
        <div className="absolute bottom-0 left-0 size-full bg-gradient-to-t from-black/50 to-50% to-transparent rounded-xl group-hover/video:opacity-0 opacity-100 transition-opacity duration-[3000ms]" />
      )}
      <div className="absolute bottom-3 right-3 flex gap-3 group-hover/video:opacity-100 opacity-0 transition-opacity">
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => videoRef.current?.requestFullscreen()}
          title="Fullscreen"
        >
          <Maximize2Icon />
        </Button>
      </div>
    </div>
  );
}
