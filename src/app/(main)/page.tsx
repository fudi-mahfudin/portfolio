import AboutMe from '@/components/home/about-me';
import GetInTouch from '@/components/home/get-in-touch';
import Hero from '@/components/home/hero';
import SelectedProjects from '@/components/home/selected-projects';
import { PROFILE_DATA } from '@/config';
import { APP_URL } from '@/lib/constants';
import { WebSite, WithContext } from 'schema-dts';

export default function Home() {
  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: PROFILE_DATA.meta_title,
    description: PROFILE_DATA.meta_description,
    url: APP_URL,
    author: {
      '@type': 'Person',
      name: PROFILE_DATA.name,
      url: APP_URL,
      sameAs: [PROFILE_DATA.wa_url, PROFILE_DATA.cv_url],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': APP_URL,
    },
    inLanguage: 'en',
    copyrightYear: new Date().getFullYear(),
    keywords: PROFILE_DATA.meta_keywords,
    dateCreated: '2025-07-23',
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <SelectedProjects />
      <AboutMe />
      <GetInTouch />
    </>
  );
}
