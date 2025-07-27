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
    description: 'An interactive web experience featuring scroll-driven animations built with React.js, styled using Tailwind CSS, and powered by GSAP for smooth, performant transitions.',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752469527/gta-motion_x6jnx6.mp4',
    live: 'https://fudi-landing-motion.vercel.app/',
    github: 'https://github.com/fudi-mahfudin/gta_landing_motion',
    stack: ['React.js', 'GSAP', 'Tailwind CSS'],
    featured: true,
    autoplay: true,
  },
  {
    name: 'Real-time Chat Application',
    description: 'A simple, interactive chat application built with Express.js, Socket.io, and EJS, showcasing real-time communication and a responsive user interface.',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1753602013/websocket-chat_zrsxh0.mp4',
    live: null,
    github: 'https://github.com/fudi-mahfudin/chat-websocket',
    stack: ['Express', 'Socket.io', 'Boostrap'],
    featured: true,
  },
  {
    name: 'Pet Daycare Management',
    description: 'A robust system for tracking pet daycare operations, developed with Next.js and Tailwind CSS, featuring secure authentication via NextAuth.js and efficient data management with Prisma.',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752227880/petsoft_mniwo2.mp4',
    live: 'https://fudi-petsoft.vercel.app',
    github: 'https://github.com/fudi-mahfudin/petsoft',
    stack: ['Next.js', 'Stripe', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
    featured: true,
  },
  {
    name: 'Educational Management System',
    description: 'Integrated system specifically tailored to the unique needs of religious education under the MoRA in Indonesia',
    video: 'https://res.cloudinary.com/djesqekdk/video/upload/v1752227877/emis-landing_nmb8fo.mp4',
    live: 'https://emis.kemenag.go.id',
    github: null,
    stack: ['React Native', 'Expo', 'Redux', 'React Native Paper'],
    featured: false,
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
