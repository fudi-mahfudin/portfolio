import Image from 'next/image';
import Photo from '@/../public/images/profile.jpg';

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative bg-gradient-to-r from-blue-joust to-green-benzol size-[100px] rounded-full flex items-center justify-center">
        <Image
          src={Photo}
          alt="Fudi Mahfudin photo"
          className="rounded-full size-[95px] border-[0.2vw] border-blue-cosmos object-cover"
        />
        {/* Circle */}
        <div className="size-4 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-4" />
      </div>
      <p className="text-3xl font-medium">
        Fudi <span className="font-extralight">Mahfudin</span>
      </p>
    </div>
  );
}
