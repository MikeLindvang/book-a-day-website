'use client';

import SignOutButton from '../../components/SignOutButton';
import styles from './layout.module.css';

export default function AdminLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SignOutButton />
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}