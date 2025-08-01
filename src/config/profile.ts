import { APP_URL } from '@/lib/constants';
import PhotoImg from '@/../public/images/profile-tr.webp';
import LogoImg from '@/../public/images/logo-fudi.png';
import { formatNumber } from '@/lib/utils';

export const PROFILE_DATA = {
  name: 'Fudi Mahfudin',
  name_first: 'Fudi',
  name_last: 'Mahfudin',
  job: 'Full Stack Developer',
  photo_url: '/images/profile-tr.webp',
  photo_src: PhotoImg,
  email: 'fudi.mahfudin@gmail.com',
  github_url: 'https://github.com/fudi-mahfudin',
  wa_url: 'https://wa.me/6289653893888',
  cv_url:
    'https://drive.google.com/file/d/1r6o60UGqWqmixusSzOvdxU1vRBLOrJQE/view',
  summary:
    'A results-oriented Developer experienced in building and optimizing user-centric web applications. Expertise in translating UI/UX design into pixel-perfect, high-quality, reusable code. A collaborative team proficient in modern technology stacks including Next.js, React Native, and Laravel, leveraging AI tools to optimize code and accelerate development workflows. 🚀🖥',

  meta_title:
    'Fudi Mahfudin - A Full Stack Developer (Next.js, React Native, React.js, Laravel)',
  meta_description:
    'A collaborative Developer specializing in user-centric applications. Expertise in Next.js, React Native, Laravel, and AI-powered to optimize code and accelerate development workflows.',
  meta_keywords: ['Full Stack Developer', 'Next.js', 'React Native', 'Laravel'],
  og_image: `${APP_URL}/images/open-graph-fudi.png`,
  logo_src: LogoImg,
  coding_started_date: '2017-01-01',
  get coding_hours() {
    return formatNumber(
      Math.round(
        (new Date().getTime() - new Date(this.coding_started_date).getTime()) /
          (1000 * 60 * 60 * 24)
      ) * 3
    );
  },
};

