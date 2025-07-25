export interface Project {
  name: string;
  description: string;
  video: string;
  stack?: string[];
  live: string | null;
  github: string | null;
  featured?: boolean;
  autoplay?: boolean;
}

export const ALL_PROJECTS: Project[] = [
  {
    name: 'Scroll-driven animation',
    description: 'Bring stories to Life',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752469527/gta-motion_x6jnx6.mp4',
    live: 'https://fudi-landing-motion.vercel.app/',
    github: 'https://github.com/fudi-mahfudin/gta_landing_motion',
    stack: ['React.js', 'GSAP', 'Tailwind CSS'],
    featured: true,
    autoplay: true,
  },
  {
    name: 'Educational Management System',
    description: 'Integrated system specifically tailored to the unique needs of religious education under the MoRA in Indonesia',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752227877/emis-landing_nmb8fo.mp4',
    live: 'https://emis.kemenag.go.id',
    github: null,
    stack: ['React Native', 'Expo', 'Redux', 'React Native Paper'],
    featured: true,
  },
  {
    name: 'Petsoft',
    description: 'Petsoft is a system for pet shop',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752227880/petsoft_mniwo2.mp4',
    live: 'https://fudi-petsoft.vercel.app',
    github: 'https://github.com/fudi-mahfudin/petsoft',
    stack: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
    featured: true,
  },
  {
    name: 'EMIS',
    description: 'Integrated system for managing educational data specifically tailored to the unique needs of religious education under the MoRA in Indonesia',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752227871/emis-form_r8xr8j.mp4',
    live: 'https://emis.kemenag.go.id',
    github: null,
    stack: ['React Native', 'Expo', 'Redux', 'React Native Paper'],
  },
] as const;
