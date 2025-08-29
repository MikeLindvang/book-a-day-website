'use client';

import { signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './SignOutButton.module.css';

export default function SignOutButton() {
  return (
    <button 
      onClick={() => signOut()} 
      className={styles.signOutButton}
      aria-label="Sign out"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
      <span className={styles.label}>Sign Out</span>
    </button>
  );
}