/**
 * 估算阅读时长。
 * 中文按 400 字/分钟、英文按 200 词/分钟，代码块不计入。
 */
export function readingMinutes(body: string | undefined): number {
  if (!body) return 1;

  const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');

  const cjkCount = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
  const latinWords = (
    text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []
  ).length;

  const minutes = cjkCount / 400 + latinWords / 200;
  return Math.max(1, Math.round(minutes));
}
