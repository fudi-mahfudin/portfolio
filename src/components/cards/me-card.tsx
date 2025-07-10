import Image from 'next/image';
import Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PROFILE_DATA } from '@/data';

export default function MeCard() {
  return (
    <Card className="min-h-[400px] h-full">
      <div className="w-full min-h-[400px] overflow-hidden">
        {/*background image*/}
        <Image
          src={PROFILE_DATA.photo_src}
          alt={PROFILE_DATA.photo}
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        {/*Tags*/}
        <div className="absolute top-[75%] space-y-2">
          <Tag
            text="Hello, universe 👋"
            className="rounded-2xl"
          />
          <Tag
            text={`I'm ${PROFILE_DATA.name_first}`}
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Full stack developer"
            className="rounded-2xl"
          />
        </div>
      </div>
    </Card>
  );
}

function Tag({ text, className }: { text: string; className: string }) {
  return (
    <div className={cn('bg-black/[0.7]  w-fit py-1.5 px-3', className)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
}
