'use client';

import PropTypes from 'prop-types';
import styles from './RichText.module.css';

/**
 * RichText renders raw HTML provided by the admin as rich text,
 * using the site's paragraph styles.
 */
export default function RichText({ html }) {
  return <div className={styles.richText} dangerouslySetInnerHTML={{ __html: html }} />;
}

RichText.propTypes = {
  html: PropTypes.string.isRequired,
};