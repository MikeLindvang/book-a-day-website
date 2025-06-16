'use client';

import BlockRenderer from './BlockRenderer';
import styles from './SalesPagePreview.module.css';

export default function SalesPagePreview({
  title,
  description,
  heroImage,
  blocks = [],
  published = false,
}) {
  return (
    <div className={styles.container}>
      {heroImage && (
        <img src={heroImage} alt={title || 'Hero image'} className={styles.heroImage} />
      )}
      {!published && title && <h1 className={styles.title}>{title}</h1>}
      {!published && description && <p className={styles.description}>{description}</p>}
      {blocks.map((block, idx) => (
        <BlockRenderer key={idx} block={block} />
      ))}
    </div>
  );
}