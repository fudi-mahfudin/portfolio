'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

type ImageProps = {
  imageClassName?: string;
  lazy?: boolean;
} & React.ComponentProps<typeof Image>;

export default function BlurImage(props: ImageProps) {
  const { alt, src, className, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn('overflow-hidden', isLoading && 'animate-pulse', className)}
    >
      <Image
        className={cn(
          isLoading && 'scale-[1.02] blur-xl grayscale',
          imageClassName
        )}
        style={{
          transition: 'filter 700ms ease, scale 150ms ease',
        }}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}
