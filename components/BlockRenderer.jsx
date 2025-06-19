'use client';

import PropTypes from 'prop-types';
import Heading from './Heading';
import Paragraph from './Paragraph';
import ImageComponent from './ImageComponent';
import TestimonialCard from './TestimonialCard';
import Button from './Button';
import EmbedCodeComponent from './EmbedCodeComponent';
import ProductGrid from './ProductGrid';
import List from './List';
import MarkdownRenderer from './MarkdownRenderer';

export default function BlockRenderer({ block }) {
  const { type, data } = block;
  switch (type) {
    case 'heading':
      return <Heading level={data.level} color={data.color}>{data.text}</Heading>;
    case 'paragraph':
      return <Paragraph>{data.text}</Paragraph>;
    case 'image':
      return <ImageComponent src={data.src} alt={data.alt} />;
    case 'testimonial':
      return <TestimonialCard quote={data.quote} author={data.author} />;
    case 'button':
      return <Button label={data.label} href={data.href} align={data.align} />;
    case 'embedCode':
      return <EmbedCodeComponent code={data.code} align={data.align} />;
    case 'productGrid':
      return <ProductGrid products={data.products} />;
    case 'list': {
      const items = Array.isArray(data.items) ? data.items : [];
      const ordered = Boolean(data.ordered);
      const alternate = Boolean(data.alternate);
      return <List items={items} alternate={alternate} ordered={ordered} />;
    }
    case 'markdown':
      return <MarkdownRenderer markdown={data.markdown || ''} />;
    default:
      return null;
  }
}

BlockRenderer.propTypes = {
  block: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.object,
  }).isRequired,
};