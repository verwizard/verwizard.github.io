export const SITE = {
  title: 'overwizard_ma',
  subtitle: '个人博客',
  description:
    'Embodied AI · Spacecraft 6-DoF Pose Estimation · Sensorless Control of PMSM',
  author: 'overwizard_ma',
  url: 'https://verwizard.github.io',
  email: 'overwizard_ma@outlook.com',
  github: 'verwizard',
  csdn: 'overwizard',
  license: 'CC BY-NC-SA 4.0',
  repo: 'https://github.com/verwizard/verwizard.github.io',
  googleVerification: '1-1ZlHoRvM0T2FqPbW2S-qLgYXN6rsn52kErlMPd_gw',
} as const;

export const NAV = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'About', href: '/about/' },
] as const;

export const HOME_INTRO =
  '做具身智能与航天感知方向的工作：控制侧是电机与系统辨识，感知侧是航天器位姿估计。项目页随进展更新，文章写得慢一些。';

export const PROJECTS_INTRO =
  '手上在做的分两类：控制与辨识这一侧服务于具身智能里的运动控制，感知与视觉这一侧主要用在航天器位姿估计上。下面按这个划分列出，进度和形态都照实写。';

export const PROJECTS_NOTE =
  '这些项目都在本地推进，暂时没有对应的公开仓库。想了解某一份的具体做法，邮件聊。';

export const PROJECT_GROUPS = [
  { key: 'control', title: '控制与辨识' },
  { key: 'perception', title: '感知与视觉' },
] as const;

export type ProjectStatus = 'active' | 'done' | 'tool';

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: '进行中',
  done: '已完成',
  tool: '工具',
};
