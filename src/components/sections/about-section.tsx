import Heading from '../heading';
import MeCard from '../cards/me-card';
import ResumeCard from '../cards/resume-card';
import StackCard from '../cards/stack-card';
import ExperienceCard from '../cards/experience-card';

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="02" title="About" subtitle="Me" />
      <div className="py-8 grid md:grid-cols-2 gap-4 xl:grid-cols-3 xl:grid-rows-auto">
        <div className="xl:row-span-2">
          <MeCard />
        </div>
        <div className="xl:row-span-2">
          <ResumeCard />
        </div>
        <StackCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
