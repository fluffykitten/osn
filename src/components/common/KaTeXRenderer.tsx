import React, { useMemo } from 'react';
import { parseAndRenderMixedText, renderInlineText, renderKaTeX } from '../../lib/katex-helpers';

interface KaTeXRendererProps {
  content: string;
  className?: string;
  inlineOnly?: boolean;
  ariaLabel?: string;
}

export const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({
  content,
  className = '',
  inlineOnly = false,
  ariaLabel,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // If it's a single formula without delimiters (e.g. \ce{H2SO4})
    if (content.startsWith('\\ce{') || content.startsWith('\\Delta') || content.startsWith('\\rightleftharpoons')) {
      return renderKaTeX(content, !inlineOnly);
    }

    if (inlineOnly) {
      return renderInlineText(content);
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
      className={`leading-relaxed break-words text-slate-800 ${className}`}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

