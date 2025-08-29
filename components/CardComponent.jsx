// components/CardComponent.js
'use client';

import PropTypes from 'prop-types';
import styles from './CardComponent.module.css';
import classNames from 'classnames';

export default function CardComponent({
  children,
  className = '',
  variant = 'default',
  surface = 'admin', // Default to admin surface
  clickable = false,
  featured = false,
  header,
  title,
  subtitle,
  footer,
  onClick,
  ...props
}) {
  const cardClasses = classNames(
    styles.card,
    styles[variant],
    {
      [styles.clickable]: clickable,
      [styles.featured]: featured,
    },
    className
  );

  const cardProps = {
    className: cardClasses,
    'data-surface': surface,
    onClick: clickable ? onClick : undefined,
    tabIndex: clickable ? 0 : undefined,
    role: clickable ? 'button' : undefined,
    'aria-pressed': clickable ? false : undefined,
    ...props
  };

  return (
    <div {...cardProps}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      {(title || subtitle) && (
        <div className={styles.cardHeader}>
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.cardBody}>{children}</div>
      {footer && <div className={styles.cardFooter}>{footer}</div>}
    </div>
  );
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
  surface: PropTypes.oneOf(['public', 'admin']),
  clickable: PropTypes.bool,
  featured: PropTypes.bool,
  header: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.node,
  onClick: PropTypes.func,
};
