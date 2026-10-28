import { defineConfig } from 'astro/config';

// 注意：本仓库是 GitHub 用户主页仓库（verwizard.github.io），站点部署在根路径，
// 绝对不能配置 base，否则所有内部链接会变成 /verwizard.github.io/xxx 而 404。
export default defineConfig({
  site: 'https://verwizard.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },
  // 旧 Jekyll 地址跳到新的英文短链。静态托管发不出 301，
  // Astro 会生成带 meta refresh 的 HTML，浏览器仍能正常跳转。
  redirects: {
    '/2025/02/静态网站及其生成工具指南/': '/blog/static-site-guide/',
  },
});
