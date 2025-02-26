import { type Metadata } from 'next';
import { ProjectsList } from './projects-list';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Things I've made trying to put my dent in the universe.",
};

export default function ProjectsPage() {
  return <ProjectsList />;
}
