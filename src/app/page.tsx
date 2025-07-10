import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import Cursor from '@/components/stylings/cursor';
import GrainEffect from '@/components/stylings/grain-effect';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      <GrainEffect />
      <Cursor />
      <main className="pb-8">
        <HeroSection />
        <h1 className="text-3xl bg-blue-joust">FeaturedSection</h1>
        <AboutSection />
        <ContactSection />
      </main>
      <Toaster position="bottom-right" richColors closeButton />
    </>
  );
}
