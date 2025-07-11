import FeaturedHeader from './featured-header';
import Video from './video';
import { Featured } from '@/lib/types';

interface Props {
  active?: boolean;
  featured: Featured;
}

export default function FeaturedCard({ active, featured }: Props) {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border shadow-lg  rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      <FeaturedHeader title={featured.title} tag={featured.tag} />
      <div className="relative flex float-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        <Video featured={featured} active={active} />
      </div>
    </div>
  );
}
