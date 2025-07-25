import PageTitle from '@/components/ui-local/page-title';
import { ProjectCardList } from '@/components/ui-local/project-card';
import { ALL_PROJECTS } from '@/config';

export default function ProjectsPage() {
  const title = 'Projects';
  const description = 'The list of my projects. Everything was made with ❤️.';

  return (
    <>
      <PageTitle title={title} description={description} />
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCardList projects={ALL_PROJECTS} />
      </div>
    </>
  );
}
