import { APP_URL } from '@/lib/constants';
import PhotoImg from '@/../public/images/profile.jpg';
import LinkedinImg from '@/../public/images/logo/icon-linkedin.svg';
import GithubImg from '@/../public/images/logo/icon-github.svg';

export const PROFILE_DATA = {
  name: 'Fudi Mahfudin',
  name_first: 'Fudi',
  name_last: 'Mahfudin',
  job: 'Full Stack Developer',
  photo: '/images/profile.jpg',
  photo_src: PhotoImg,
  wa_url: 'https://wa.me/6289653893888',
  cv_url: 'https://google.com',
  summary: 'A results-oriented Developer experienced in building and optimizing user-centric web applications. Expertise in translating UI/UX design into pixel-perfect, high-quality, reusable code. A collaborative team proficient in modern technology stacks including Next.js, React Native, and Laravel, leveraging AI tools to optimize code and accelerate development workflows. 🚀🖥',

  meta_title:
    'Fudi Mahfudin | Full Stack Developer (Next.js, React Native, React.js, Laravel)',
  meta_description:
    'A collaborative Developer specializing in user-centric applications. Expertise in Next.js, React Native, Laravel, and AI-powered to optimize code and accelerate development workflows.',
  meta_keywords: ['Full Stack Developer', 'Next.js', 'React Native', 'Laravel'],
  og_image: `${APP_URL}/images/open-graph-fudi.png`,
};

export const SOCIAL_DATA = [
  {
    icon: LinkedinImg,
    link: 'https://www.linkedin.com/in/fudi-mahfudin/',
    username: 'Fudi Mahfudin',
  },
  {
    icon: GithubImg,
    link: 'https://github.com/fudi-mahfudin',
    username: 'Fudi Mahfudin',
  },
];
