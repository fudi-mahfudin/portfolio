import { FaDownload } from 'react-icons/fa';
import Card from '../ui/card';
import Image from 'next/image';
import SignatureImg from '@/../public/images/signature.svg';
import Socials from '../socials';
import ButtonFancy from '../ui/button-fancy';
import { PROFILE_DATA } from '@/data';

export default function ResumeCard() {
  return (
    <Card className="min-h-[400px] h-full flex flex-col justify-between gap-y-6">
      <h1 className="text-lg xl:text-2xl font-medium text-primary-foreground">
        {PROFILE_DATA.summary}
      </h1>
      {/*Signature*/}
      <Image
        width={208}
        src={SignatureImg}
        alt={PROFILE_DATA.name}
        className="self-center min-w-52 w-[70%]"
      />
      {/*Socials and resume btn*/}
      <div className="flex items-center justify-between">
        <Socials />
        <ButtonFancy
          className="text-base py-2.5 px-4"
          href={PROFILE_DATA.cv_url}
          target="_blank"
        >
          <FaDownload /> Download CV
        </ButtonFancy>
      </div>
    </Card>
  );
}
