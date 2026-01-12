function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ');
}

export default function generateTags(htmlText: string, maxTags = 5): string[] {
  if (!htmlText) return [];
  const text = stripHtml(htmlText);
  return text.split(/\s+/)
    .filter(w => w.length > 2 && w[0] === "#")
    .map(w => w.toLowerCase().slice(1))
    .slice(0, maxTags);
}

