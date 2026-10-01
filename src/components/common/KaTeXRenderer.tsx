import React, { useMemo } from 'react';
import { parseAndRenderMixedText, renderInlineText, renderKaTeX, normalizeLatexBackslashes } from '../../lib/katex-helpers';

interface KaTeXRendererProps {
  content: string;
  className?: string;
  inlineOnly?: boolean;
  ariaLabel?: string;
}

export const KaTeXRenderer = React.memo<KaTeXRendererProps>(({
  content,
  className = '',
  inlineOnly = false,
  ariaLabel,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    const normalizedContent = normalizeLatexBackslashes(content);

    // If it's a single formula without delimiters (e.g. \ce{H2SO4})
    if (normalizedContent.startsWith('\\ce{') || normalizedContent.startsWith('\\Delta') || normalizedContent.startsWith('\\rightleftharpoons')) {
      return renderKaTeX(normalizedContent, !inlineOnly);
    }

    if (inlineOnly) {
      return renderInlineText(normalizedContent);
    }

    return parseAndRenderMixedText(normalizedContent);
  }, [content, inlineOnly]);

  if (inlineOnly) {
    return (
      <span
        className={`inline break-words ${className}`}
        aria-label={ariaLabel}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <div
      className={`leading-relaxed break-words max-w-full overflow-x-auto ${className.includes('text-') ? className : `text-slate-800 ${className}`.trim()}`}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
});

KaTeXRenderer.displayName = 'KaTeXRenderer';

