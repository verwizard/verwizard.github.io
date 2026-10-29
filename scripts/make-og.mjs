/**
 * 生成 1200x630 的分享图（og:image）。
 *
 * 手动跑：node scripts/make-og.mjs
 * 不进 CI —— 避免依赖 GitHub Actions 环境的字体，字形在本地目视验收。
 * 只在换色板时需要重跑。
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;

const BG = '#0a111c';
const INK = '#e6eef7';
const DIM = '#8fa3b9';
const CYAN = '#38bdf8';
const HAIR = 'rgba(226,240,255,0.12)';

const MONO =
  'Cascadia Mono, Consolas, DejaVu Sans Mono, Liberation Mono, Menlo, monospace';
const SANS = 'Segoe UI, DejaVu Sans, Liberation Sans, Arial, sans-serif';

/** 四角的 L 形刻线，唯一的装饰符号 */
const tick = (x, y, dx, dy) =>
  `<path d="M${x} ${y}h${dx * 26}M${x} ${y}v${dy * 26}" stroke="${CYAN}" stroke-width="2" fill="none"/>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="40.5" y="40.5" width="${W - 81}" height="${H - 81}"
        fill="none" stroke="${HAIR}" stroke-width="1"/>
  ${tick(40.5, 40.5, 1, 1)}
  ${tick(1159.5, 40.5, -1, 1)}
  ${tick(40.5, 589.5, 1, -1)}
  ${tick(1159.5, 589.5, -1, -1)}

  <text x="96" y="214" font-family="${MONO}" font-size="19"
        letter-spacing="4.2" fill="${CYAN}">PERSONAL SITE</text>
  <rect x="96" y="238" width="72" height="2" fill="${CYAN}"/>

  <text x="96" y="352" font-family="${MONO}" font-size="86"
        fill="${INK}">overwizard_ma</text>

  <text x="96" y="430" font-family="${MONO}" font-size="22"
        letter-spacing="1.5" fill="${DIM}">CONTROL / LOOP TUNING / POSE ESTIMATION</text>
  <text x="96" y="522" font-family="${SANS}" font-size="20"
        fill="${DIM}">verwizard.github.io</text>
</svg>`;

await sharp(Buffer.from(svg))
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile('public/og.jpg');

console.log('已生成 public/og.jpg');
