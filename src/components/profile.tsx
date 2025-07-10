import Image from 'next/image';
import { PROFILE_DATA } from '@/data';

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative bg-gradient-to-r from-blue-joust to-green-benzol size-[100px] rounded-full flex items-center justify-center">
        <Image
          src={PROFILE_DATA.photo_src}
          alt={`${PROFILE_DATA.name} avatar`}
          className="rounded-full size-[95px] border-[0.2vw] border-blue-cosmos object-cover"
        />
        {/* Circle */}
        <div className="size-4 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-4" />
      </div>
      <p className="text-3xl font-medium">
        {PROFILE_DATA.name_first} <span className="font-extralight">{PROFILE_DATA.name_last}</span>
      </p>
    </div>
  );
}
