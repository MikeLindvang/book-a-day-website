// components/Header.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo or Site Name */}
        <div className={styles.logo}>
          <FontAwesomeIcon icon="book" className={styles.logoIcon} />
          <Link href="/">Book-A-Day</Link>
        </div>
        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
