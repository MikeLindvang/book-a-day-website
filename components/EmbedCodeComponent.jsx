// components/EmbedCodeComponent.js
'use client';

import PropTypes from 'prop-types';
import styles from './EmbedCodeComponent.module.css';
import classNames from 'classnames';

export default function EmbedCodeComponent({
  code,
  align = 'center',
  className = '',
}) {
  const containerClasses = classNames(styles.container, className, {
    [styles.center]: align === 'center',
    [styles.left]: align === 'left',
    [styles.right]: align === 'right',
  });

  return (
    <div
      className={containerClasses}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}

EmbedCodeComponent.propTypes = {
  code: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string,
};
