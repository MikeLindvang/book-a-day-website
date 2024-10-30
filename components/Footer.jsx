// components/Footer.js
'use client'; // Add this directive at the top to make the component a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieAccepted');
    if (consent) {
      setCookieAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setCookieAccepted(true);
  };

  return (
    <>
      <footer className={`${styles.footer} ${styles.stickyFooter}`}>
        <div className={`${styles.topBar}`}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/copyright">Copyright</Link>
        </div>
        <div className={styles.container}>
          <div className={styles.copyRight}>
            <p>
              &copy; {new Date().getFullYear()} <Link href="/">MySite</Link>.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {!cookieAccepted && (
        <div className={styles.cookieConsent}>
          <p>
            We use cookies to ensure you get the best experience on our website.{' '}
            <button onClick={acceptCookies} className={styles.acceptButton}>
              Accept
            </button>
          </p>
        </div>
      )}
    </>
  );
}
