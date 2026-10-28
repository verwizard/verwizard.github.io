import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeTableWrap } from './src/lib/rehype-table-wrap.mjs';

// 注意：本仓库是 GitHub 用户主页仓库（verwizard.github.io），站点部署在根路径，
// 绝对不能配置 base，否则所有内部链接会变成 /verwizard.github.io/xxx 而 404。
export default defineConfig({
  site: 'https://verwizard.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // 排除 404 与旧地址的 redirect 桩页
      filter: (page) =>
        !page.includes('/404') && !page.includes('/2025/02/'),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeTableWrap],
    shikiConfig: {
      // 双主题：产物只输出 --shiki-light / --shiki-dark CSS 变量，
      // 具体用哪套由 styles/prose.css 按 data-theme 决定。
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // 不能省：缺了它 Shiki 会内联写死 color，暗色下代码不变色
      defaultColor: false,
      wrap: false,
    },
  },
  // 旧 Jekyll 地址跳到新的英文短链。静态托管发不出 301，
  // Astro 会生成带 meta refresh 的 HTML，浏览器仍能正常跳转。
  redirects: {
    '/2025/02/静态网站及其生成工具指南/': '/blog/static-site-guide/',
  },
});
