'use client';

import SignOutButton from '../../components/SignOutButton';
import Header from '../../components/Header';
import styles from './layout.module.css';

export default function AdminLayout({ children }) {
  return (
    <>
      <style jsx global>{`body { margin-top: 0; }`}</style>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <SignOutButton />
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
}