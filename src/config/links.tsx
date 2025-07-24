import { SiGithub } from '@icons-pack/react-simple-icons';
import {
  FlameIcon,
  LinkedinIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon,
} from 'lucide-react';

export const HEADER_LINKS = [
  {
    icon: <PencilIcon className="size-3.5" />,
    href: '/blog',
    key: 'blog',
  },
  {
    icon: <MessageCircleIcon className="size-3.5" />,
    href: '/guestbook',
    key: 'guestbook',
  },
  {
    icon: <FlameIcon className="size-3.5" />,
    href: '/projects',
    key: 'projects',
  },
  {
    icon: <UserCircleIcon className="size-3.5" />,
    href: '/about',
    key: 'about',
  },
  {
    icon: <MonitorIcon className="size-3.5" />,
    href: '/uses',
    key: 'uses',
  },
] as const;

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: '/', key: 'home' },
      { href: '/blog', key: 'blog' },
      { href: '/about', key: 'about' },
      { href: '/dashboard', key: 'dashboard' },
    ],
  },
  {
    id: 2,
    links: [
      { href: '/guestbook', key: 'guestbook' },
      { href: '/uses', key: 'uses' },
      { href: '/projects', key: 'projects' },
      { href: 'https://mahfudin.vercel.app', key: 'links' },
    ],
  },
  {
    id: 3,
    links: [
      { href: '#facebook', key: 'facebook' },
      { href: '#instagram', key: 'instagram' },
      { href: '#github', key: 'github' },
      { href: '#youtube', key: 'youtube' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  {
    href: '#github',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: '#linkedin',
    title: 'LinkedIn',
    icon: LinkedinIcon,
  },
];
