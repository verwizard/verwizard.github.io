export const SITE = {
  title: 'overwizard_ma',
  subtitle: '个人博客',
  description: '电机控制 · 过程回路整定 · 视觉位姿估计',
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
  '控制与感知两个方向：一边做电机与过程回路的算法，一边把视觉模型用到具体的位姿与分割任务上。项目页随进展更新，文章写得慢一些。';

export const PROJECTS_INTRO =
  '手上在做的分两类：一类让机器按预期动，一类从图像里把状态量出来。下面按这个划分列出，进度和形态都照实写。';

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
