// components/TestimonialCard.js
'use client';

import PropTypes from 'prop-types';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ quote, author, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>- {author}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
};
