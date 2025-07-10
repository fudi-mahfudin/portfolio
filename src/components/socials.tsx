import Button from '@/components/ui/button';
import { SOCIAL_DATA } from '@/data';
import Image from 'next/image';

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {SOCIAL_DATA.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <Image
            src={social.icon}
            alt={social.username}
            className="size-6 grid place-items-center"
          />
        </Button>
      ))}
    </div>
  );
}
