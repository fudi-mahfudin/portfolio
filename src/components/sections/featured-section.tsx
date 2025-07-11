import { FEATURED_DATA } from '@/data';
import Heading from '../heading';
import FeaturedCard from '../featured/featured-card';
import FeaturedList from '../featured/featured-list';

const MAIN_FEATURED = FEATURED_DATA[0];

export default function FeaturedSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="01" title="Featured" subtitle="Work" />

      <FeaturedCard
        active
        featured={MAIN_FEATURED}
      />
      <div className="mt-24">
        <FeaturedList />
      </div>
    </div>
  );
}
