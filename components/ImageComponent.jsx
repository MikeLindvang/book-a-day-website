// components/ImageComponent.js
'use client';

import PropTypes from 'prop-types';
import styles from './ImageComponent.module.css';

export default function ImageComponent({
  src,
  alt,
  className = '',
  width,
  height,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${className}`}
      width={width}
      height={height}
    />
  );
}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
