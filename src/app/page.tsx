import AboutSection from '@/components/sections/about-section';
import HeroSection from '@/components/sections/hero-section';
import Cursor from '@/components/stylings/cursor';
import GrainEffect from '@/components/stylings/grain-effect';

export default function Home() {
  return (
    <>
      <GrainEffect />
      <Cursor />
      <main className="pb-8">
        <HeroSection />
        <h1 className="text-3xl bg-blue-joust">FeaturedSection</h1>
        <AboutSection />
        <h1 className="text-3xl bg-blue-joust">ContactSection</h1>
      </main>
    </>
  );
}
