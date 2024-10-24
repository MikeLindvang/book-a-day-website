// components/Heading.js
'use client';

import PropTypes from 'prop-types';
import styles from './Heading.module.css';
import classNames from 'classnames';

export default function Heading({
  level = 1,
  children,
  color = 'primary',
  className = '',
}) {
  const Tag = `h${level}`;

  // Validate the color prop
  const allowedColors = ['primary', 'red', 'blue', 'white'];
  const headingColor = allowedColors.includes(color) ? color : 'primary';

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
  color: PropTypes.oneOf(['primary', 'red', 'blue']),
  className: PropTypes.string,
};
