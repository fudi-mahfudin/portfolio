import { PROFILE_DATA } from '@/data';
import Header from '../navigation/header';
import MagneticWrapper from '../stylings/magnetic-wrapper';
import { FaWhatsapp } from 'react-icons/fa';
import ButtonFancy from '../ui/button-fancy';
import LiveClock from '../live-clock';

export default function HeroSection() {
  return (
    <div className="h-screen overflow-hidden p-5 md:p-8 flex flex-col justify-between">
      <Header />

      {/* slogan */}
      <div className="flex flex-col">
        <p className="text-[16vw] lg:text-[14vw] 2xl:text-[12rem] uppercase font-medium leading-[.8] text-center">
          Code
          <br />
          Crafting
          <br />
          Brilliance
        </p>
        <p className="text-base tracking-tighter uppercase font-medium pl-[1.5vw] md:pl-[2.5vw] 2xl:self-end">
          Empowering innovation
          <br />
          through inspired design
          <br />
          where challenges spark creativity
          <br />
          and solutions redefine possibilities.
        </p>
      </div>

      {/*show magnetic fancy button on small screens and hide it on md screen*/}
      <div className="md:hidden">
        <MagneticWrapper>
          <ButtonFancy href={PROFILE_DATA.wa_url} target="_blank">
            <FaWhatsapp />
            Let`s talk
          </ButtonFancy>
        </MagneticWrapper>
      </div>
      {/* live clock */}
      <div className="self-end">
        <LiveClock />
      </div>
    </div>
  );
}
