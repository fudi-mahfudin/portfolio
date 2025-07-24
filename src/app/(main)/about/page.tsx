import PageTitle from '@/components/ui-local/page-title';
import { notFound } from 'next/navigation';

export default function AboutPage() {
  const title = 'About';
  const description =
    '👋 Hi there! I am Fudi Mahfudin, a student who loves web development.';

  return (
    <>
      <PageTitle title={title} description={description} />
    </>
  );
}
