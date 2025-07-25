import {
  SiGithub,
  SiInstagram,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import {
  FileUserIcon,
  FlameIcon,
  HeartHandshakeIcon,
  LinkedinIcon,
  PencilIcon,
  UserCircleIcon,
} from 'lucide-react';
import { PROFILE_DATA } from './profile';

export const HEADER_LINKS = [
  {
    icon: <PencilIcon className="size-3.5" />,
    href: '/blog',
    key: 'blog',
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: '/projects',
    key: 'project',
  },
  {
    icon: <HeartHandshakeIcon className="size-3.5" />,
    href: '/services',
    key: 'service',
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: '/about',
    key: 'about',
  },
  {
    icon: <FileUserIcon className="size-3.5" />,
    href: PROFILE_DATA.cv_url,
    key: 'resume',
  },
] as const;

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: '/', key: 'home' },
      { href: '/blog', key: 'blog' },
      { href: '/about', key: 'about' },
      { href: PROFILE_DATA.cv_url, key: 'resume' },
    ],
  },
  {
    id: 2,
    links: [
      { href: '/services', key: 'service' },
      { href: '/projects', key: 'project' },
      { href: 'https://mahfudin.vercel.app', key: 'links' },
    ],
  },
  {
    id: 3,
    links: [
      { href: 'https://www.linkedin.com/in/fudi-mahfudin', key: 'linkedin' },
      { href: 'https://github.com/fudi-mahfudin', key: 'github' },
      { href: 'https://instagram.com', key: 'instagram' },
      { href: 'https://youtube.com', key: 'youtube' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/fudi-mahfudin',
    title: 'LinkedIn',
    icon: LinkedinIcon,
  },
  {
    href: 'https://github.com/fudi-mahfudin',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: 'https://instagram.com',
    title: 'Instagram',
    icon: SiInstagram,
  },
  {
    href: 'https://youtube.com',
    title: 'YouTube',
    icon: SiYoutube,
  },
];
