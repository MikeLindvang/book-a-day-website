// components/Paragraph.js
'use client';

import PropTypes from 'prop-types';
import styles from './Paragraph.module.css';

export default function Paragraph({ children, className = '' }) {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
