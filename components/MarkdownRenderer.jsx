'use client';

import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Paragraph from './Paragraph';
import CardComponent from './CardComponent';

/**
 * MarkdownRenderer converts Markdown text to React elements.
 * Paragraphs use the Paragraph component for consistent styling.
 * Optionally wraps rendered markdown in a CardComponent when cardVariant is set.
 */
export default function MarkdownRenderer({ markdown, cardVariant }) {
  const content = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ p: ({ node, ...props }) => <Paragraph {...props} /> }}
    >
      {markdown}
    </ReactMarkdown>
  );

  if (cardVariant) {
    return <CardComponent variant={cardVariant}>{content}</CardComponent>;
  }

  return content;
}

MarkdownRenderer.propTypes = {
  markdown: PropTypes.string.isRequired,
  cardVariant: PropTypes.oneOf([
    'default',
    'light',
    'dark',
    'primaryBorder',
    'accent',
    'accentBackground',
    'info',
    'success',
    'outline',
    'shadow',
    'productCard',
  ]),
};