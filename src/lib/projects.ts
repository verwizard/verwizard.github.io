import { getCollection, type CollectionEntry } from 'astro:content';
import { PROJECT_GROUPS } from '../consts';

export type Project = CollectionEntry<'projects'>;

export async function getSortedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');

  // order 只在组内唯一，跨组可以重号
  const seen = new Map<string, string>();
  for (const project of projects) {
    const { group, order } = project.data;
    const key = `${group}:${order}`;
    const existing = seen.get(key);
    if (existing) {
      throw new Error(
        `项目 order 重复：${group} 组内 ${order} 同时被 ${existing} 和 ${project.id} 使用`
      );
    }
    seen.set(key, project.id);
  }

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getGroupedProjects() {
  const projects = await getSortedProjects();
  return PROJECT_GROUPS.map((group) => ({
    key: group.key,
    title: group.title,
    description: group.description,
    projects: projects.filter((project) => project.data.group === group.key),
  })).filter((group) => group.projects.length > 0);
}
