// components/CardComponent.js
'use client';

import PropTypes from 'prop-types';
import styles from './CardComponent.module.css';
import classNames from 'classnames';

export default function CardComponent({
  children,
  className = '',
  variant = 'default',
}) {
  const cardClasses = classNames(styles.card, styles[variant], className);

  return <div className={cardClasses}>{children}</div>;
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'default',
    'light',
    'dark',
    'primaryBorder',
    'accent',
    'accentBackground',
    'info',
    'success',
    'outline',
    'shadow',
    'productCard',
  ]),
};
