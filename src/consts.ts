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
  '一边让机器按预期动，一边从图像里把状态量出来；前者是控制，后者是感知。项目页随进展更新，文章写得慢一些。';

export const HOME_TOPICS = [
  '具身智能 · 电机控制',
  '航天 · 位姿估计',
  '工业过程 · 回路整定',
] as const;

export const PROJECTS_INTRO =
  '项目按方向分三组：具身智能是电机控制与系统辨识，航天是航天器位姿估计与视觉处理，工业过程是回路整定与监控。下面按这三组列出，进度和形态都照实写。';

export const PROJECTS_NOTE =
  '这些项目都在本地推进，暂时没有对应的公开仓库。想了解某一份的具体做法，邮件聊。';

export const PROJECT_GROUPS = [
  {
    key: 'embodied',
    title: '具身智能',
    description: '让本体按预期运动：电机控制，以及为控制器服务的系统辨识。',
  },
  {
    key: 'space',
    title: '航天',
    description: '从图像里把航天器的相对位姿量出来，视觉侧的基础工作也放在这里。',
  },
  {
    key: 'industrial',
    title: '工业过程',
    description: '回路级的整定、监控与图纸分析，同一套回路方法在过程工业里的用法。',
  },
] as const;

export type ProjectStatus = 'active' | 'done' | 'tool';

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: '进行中',
  done: '已完成',
  tool: '工具',
};
