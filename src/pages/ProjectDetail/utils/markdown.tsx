export function parseMarkdown(text: string) {
  if (!text) return null;

  // Split by double-newlines to separate paragraphs/sections
  const blocks = text.split(/\n\n+/);

  return (
    <div className="space-y-4 text-xs sm:text-[13px] font-sans font-normal leading-relaxed text-[var(--text-secondary)] transition-colors duration-300">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // 1. Horizontal Divider
        if (trimmed === '---') {
          return <div key={idx} className="h-px bg-[var(--border-color)] w-full my-4 transition-colors duration-300" />;
        }

        // 2. Headings (## Heading)
        if (trimmed.startsWith('## ')) {
          return (
            <h4 key={idx} className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] tracking-wide pt-2 uppercase font-mono transition-colors duration-300">
              {trimmed.replace('## ', '')}
            </h4>
          );
        }

        // 3. Bulleted Lists (* or -)
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').map(line => {
            const cleanLine = line.replace(/^[\*\-]\s+/, '');
            return renderRichText(cleanLine);
          });
          return (
            <ul key={idx} className="list-disc pl-4 space-y-1 text-[var(--text-secondary)] transition-colors duration-300">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }

        // Default: regular paragraph, parse bold and links
        return (
          <p key={idx} className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line transition-colors duration-300">
            {renderRichText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

export function renderRichText(text: string) {
  // Parse markdown links [text](url)
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      const url = linkMatch[2];
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text-primary)] hover:opacity-80 underline font-medium transition-all cursor-pointer"
        >
          {linkText}
        </a>
      );
    }

    // Parse bold text **bold**
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((subPart, j) => {
      if (subPart.startsWith('**') && subPart.endsWith('**')) {
        return (
          <strong key={`${i}-${j}`} className="font-semibold text-[var(--text-primary)] transition-colors duration-300">
            {subPart.slice(2, -2)}
          </strong>
        );
      }
      return subPart;
    });
  });
}
