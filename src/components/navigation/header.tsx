import Profile from '../profile';
import MagneticWrapper from '../stylings/magnetic-wrapper';
import ButtonFancy from '../ui/button-fancy';
import { FaWhatsapp } from 'react-icons/fa';
import { PROFILE_DATA } from '@/data';

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <ButtonFancy href={PROFILE_DATA.wa_url} target="_blank">
            <FaWhatsapp />
            Let`s talk
          </ButtonFancy>
        </MagneticWrapper>

        {/* TODO: Toggle menu button */}
      </div>
    </div>
  );
}
