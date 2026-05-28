function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatInline(text) {
  return text
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

export function renderMarkdown(markdown) {
  const lines = escapeHtml(markdown || '').split(/\r?\n/);
  const html = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      return;
    }

    if (/^###\s+/.test(trimmed)) {
      closeList();
      html.push(`<h3>${formatInline(trimmed.replace(/^###\s+/, ''))}</h3>`);
      return;
    }

    if (/^##\s+/.test(trimmed)) {
      closeList();
      html.push(`<h2>${formatInline(trimmed.replace(/^##\s+/, ''))}</h2>`);
      return;
    }

    if (/^#\s+/.test(trimmed)) {
      closeList();
      html.push(`<h1>${formatInline(trimmed.replace(/^#\s+/, ''))}</h1>`);
      return;
    }

    if (/^- /.test(trimmed)) {
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${formatInline(trimmed.replace(/^- /, ''))}</li>`);
      return;
    }

    closeList();
    html.push(`<p>${formatInline(trimmed)}</p>`);
  });

  closeList();
  return html.join('\n');
}
