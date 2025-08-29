// components/Button.js
'use client';

import PropTypes from 'prop-types';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
  label,
  icon,
  onClick,
  type = 'button',
  href,
  className = '',
  align = 'center',
  surface = 'admin', // Default to admin surface
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  ...props
}) {
  const containerClasses = classNames({
    [styles.center]: align === 'center',
    [styles.left]: align === 'left',
    [styles.right]: align === 'right',
  });

  const buttonClasses = classNames(
    styles.button,
    {
      [styles[variant]]: variant,
      [styles[size]]: size,
      [styles.loading]: loading,
    },
    className
  );

  const buttonProps = {
    className: buttonClasses,
    'data-surface': surface,
    disabled: disabled || loading,
    ...props
  };

  if (href) {
    return (
      <div className={containerClasses}>
        <a href={href} {...buttonProps}>
          {loading ? (
            <span className={styles.spinner} aria-label="Loading" />
          ) : (
            <>
              {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
              {label}
            </>
          )}
        </a>
      </div>
    );
  }

  return (
    <span className={containerClasses}>
      <button type={type} onClick={onClick} {...buttonProps}>
        {loading ? (
          <span className={styles.spinner} aria-label="Loading" />
        ) : (
          <>
            {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
            {label}
          </>
        )}
      </button>
    </span>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
  surface: PropTypes.oneOf(['public', 'admin']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
};
