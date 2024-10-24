// components/List.js
'use client';

import PropTypes from 'prop-types';
import styles from './List.module.css';
import classNames from 'classnames';

export default function List({
  items,
  ordered = false,
  alternate = false,
  className = '',
}) {
  if (ordered) {
    return (
      <ol className={classNames(styles.list, className)}>
        {items.map((item, index) => (
          <li
            key={index}
            className={alternate && index % 2 === 0 ? styles.bold : ''}
          >
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className={classNames(styles.list, className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className={alternate && index % 2 === 0 ? styles.bold : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  ordered: PropTypes.bool,
  alternate: PropTypes.bool,
  className: PropTypes.string,
};
