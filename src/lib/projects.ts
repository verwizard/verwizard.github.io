import { getCollection, type CollectionEntry } from 'astro:content';
import { PROJECT_GROUPS } from '../consts';

export type Project = CollectionEntry<'projects'>;

export async function getSortedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');

  const seen = new Map<number, string>();
  for (const project of projects) {
    const order = project.data.order;
    const existing = seen.get(order);
    if (existing) {
      throw new Error(
        `项目 order 重复：${order} 同时被 ${existing} 和 ${project.id} 使用`
      );
    }
    seen.set(order, project.id);
  }

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getGroupedProjects() {
  const projects = await getSortedProjects();
  return PROJECT_GROUPS.map((group) => ({
    key: group.key,
    title: group.title,
    projects: projects.filter((project) => project.data.group === group.key),
  })).filter((group) => group.projects.length > 0);
}
