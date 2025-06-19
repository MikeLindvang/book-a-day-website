'use client';

import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Paragraph from './Paragraph';

/**
 * MarkdownRenderer converts Markdown text to React elements.
 * Paragraphs use the Paragraph component for consistent styling.
 */
export default function MarkdownRenderer({ markdown }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{ p: ({ node, ...props }) => <Paragraph {...props} /> }}
    >
      {markdown}
    </ReactMarkdown>
  );
}

MarkdownRenderer.propTypes = {
  markdown: PropTypes.string.isRequired,
};