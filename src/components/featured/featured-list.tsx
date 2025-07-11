'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import FeaturedCard from './featured-card';
import { FEATURED_DATA } from '@/data';

export default function FeaturedList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {FEATURED_DATA.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            'relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
            i === hoveredIndex ? 'lg:w-[50%]' : 'lg:w-[33.33%]'
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            active={i === hoveredIndex}
            featured={featured}
          />
        </div>
      ))}
    </div>
  );
}
