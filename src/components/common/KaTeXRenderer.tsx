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

    // If it's a single formula without delimiters (e.g. \ce{H2SO4})
    if (content.startsWith('\\ce{') || content.startsWith('\\Delta') || content.startsWith('\\rightleftharpoons')) {
      return renderKaTeX(normalizeLatexBackslashes(content), !inlineOnly);
    }

    if (inlineOnly) {
      return renderInlineText(normalizeLatexBackslashes(content));
    }

    return parseAndRenderMixedText(content);
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

