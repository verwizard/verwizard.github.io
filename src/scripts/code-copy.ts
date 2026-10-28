function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand('copy');
      resolve();
    } catch (error) {
      reject(error);
    } finally {
      area.remove();
    }
  });
}

function enhance(pre: HTMLElement) {
  if (pre.parentElement?.classList.contains('code-block')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'code-block';
  pre.replaceWith(wrapper);
  wrapper.appendChild(pre);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'code-copy';
  button.textContent = '复制';
  button.setAttribute('aria-label', '复制代码');

  const status = document.createElement('span');
  status.className = 'visually-hidden';
  status.setAttribute('role', 'status');

  button.addEventListener('click', async () => {
    const code = pre.querySelector('code')?.textContent ?? pre.textContent ?? '';
    try {
      await copyText(code);
      button.textContent = '已复制';
      status.textContent = '代码已复制到剪贴板';
    } catch {
      button.textContent = '复制失败';
      status.textContent = '复制失败';
    }
    window.setTimeout(() => {
      button.textContent = '复制';
      status.textContent = '';
    }, 1600);
  });

  wrapper.append(button, status);
}

document.querySelectorAll<HTMLElement>('.prose pre.astro-code').forEach(enhance);
