// components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} <Link href="/">MySite</Link>
        </p>
      </div>
    </footer>
  );
}
