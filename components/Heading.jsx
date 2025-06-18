// components/Heading.js
'use client';

import PropTypes from 'prop-types';
import styles from './Heading.module.css';
import classNames from 'classnames';

/**
 * Supported heading colors for use in editors and components.
 */
export const ALLOWED_COLORS = ['primary', 'red', 'blue', 'white'];

export default function Heading({
  level = 1,
  children,
  color = 'primary',
  className = '',
}) {
  const Tag = `h${level}`;

  // Validate the color prop
  const headingColor = ALLOWED_COLORS.includes(color) ? color : 'primary';

  return (
    <Tag
      className={classNames(styles.heading, styles[headingColor], className)}
    >
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(ALLOWED_COLORS),
  className: PropTypes.string,
};
