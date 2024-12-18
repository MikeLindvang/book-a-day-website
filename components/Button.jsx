// components/Button.js
'use client';

import PropTypes from 'prop-types';
import styles from './Button.module.css';
import classNames from 'classnames';

export default function Button({
  label,
  onClick,
  type = 'button',
  href,
  className = '',
  align = 'center',
}) {
  const containerClasses = classNames({
    [styles.center]: align === 'center',
    [styles.left]: align === 'left',
    [styles.right]: align === 'right',
  });

  const buttonClasses = classNames(styles.button, className);

  if (href) {
    return (
      <div className={containerClasses}>
        <a href={href} className={buttonClasses}>
          {label}
        </a>
      </div>
    );
  }

  return (
    <span className={containerClasses}>
      <button type={type} onClick={onClick} className={buttonClasses}>
        {label}
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
};
