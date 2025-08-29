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
  loading = false,
  error = false,
  status,
  header,
  title,
  subtitle,
  footer,
  meta,
  avatar,
  onClick,
  onKeyDown,
  ...props
}) {
  // Handle keyboard navigation for clickable cards
  const handleKeyDown = (event) => {
    if (clickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      if (onClick) onClick(event);
    }
    if (onKeyDown) onKeyDown(event);
  };

  const cardClasses = classNames(
    styles.card,
    styles[variant],
    {
      [styles.clickable]: clickable,
      [styles.featured]: featured,
      [styles.loading]: loading,
      [styles.error]: error,
      [styles.interactive]: clickable && !loading && !error,
    },
    className
  );

  const cardProps = {
    className: cardClasses,
    'data-surface': surface,
    onClick: clickable && !loading && !error ? onClick : undefined,
    onKeyDown: clickable && !loading && !error ? handleKeyDown : onKeyDown,
    tabIndex: clickable && !loading && !error ? 0 : undefined,
    role: clickable ? 'button' : undefined,
    'aria-pressed': clickable ? false : undefined,
    'aria-busy': loading,
    'aria-invalid': error,
    'aria-disabled': loading || error,
    ...props
  };

  return (
    <div {...cardProps}>
      {header && <div className={styles.cardHeader}>{header}</div>}
      {(title || subtitle) && (
        <div className={styles.cardHeader}>
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
          {status && (
            <div className={classNames(styles.statusIndicator, styles[status])}>
              {status === 'pending' && '⏳ Pending'}
              {status === 'approved' && '✅ Approved'}
              {status === 'rejected' && '❌ Rejected'}
            </div>
          )}
        </div>
      )}
      <div className={styles.cardBody}>
        {loading && (
          <div style={{ textAlign: 'center', padding: 'var(--space-4)' }}>
            <div aria-label="Loading content">Loading...</div>
          </div>
        )}
        {error && !loading && (
          <div style={{ color: 'var(--danger)', textAlign: 'center' }}>
            ⚠️ Error loading content
          </div>
        )}
        {!loading && !error && children}
      </div>
      {meta && (
        <div className={styles.cardMeta}>
          {avatar && (
            <img 
              src={avatar} 
              alt="" 
              className={styles.avatar}
              role="presentation"
            />
          )}
          <span>{meta}</span>
        </div>
      )}
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
    'warning',
    'danger',
    'outline',
    'shadow',
    'productCard',
    'gradient',
    'glass',
    'pricing',
    'testimonial',
    'statusPending',
    'statusApproved',
    'statusRejected',
    'interactive',
    'loading',
    'error',
    'minimal',
    'elevated',
  ]),
  surface: PropTypes.oneOf(['public', 'admin']),
  clickable: PropTypes.bool,
  featured: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  status: PropTypes.oneOf(['pending', 'approved', 'rejected']),
  header: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  footer: PropTypes.node,
  meta: PropTypes.string,
  avatar: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};
