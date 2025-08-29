'use client';

import { usePathname } from 'next/navigation';
import SignOutButton from '../../components/SignOutButton';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faFileAlt, 
  faLayerGroup, 
  faChartLine,
  faUser,
  faCog,
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import styles from './layout.module.css';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', icon: faFileAlt, label: 'Pages', exact: true },
    { href: '/admin/new', icon: faHome, label: 'New Page', exact: false },
    { href: '/admin/templates', icon: faLayerGroup, label: 'Templates', exact: false },
    { href: '/admin/preview', icon: faChartLine, label: 'Preview', exact: false },
  ];

  const isActive = (href, exact) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <style jsx global>{`body { margin-top: 0; }`}</style>
      <Header />
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.adminBrand}>
              <FontAwesomeIcon icon={faCog} className={styles.brandIcon} />
              <h2 className={styles.brandTitle}>Admin Panel</h2>
            </div>
            
            <nav className={styles.navigation}>
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.href} className={styles.navItem}>
                    <a 
                      href={item.href}
                      className={`${styles.navLink} ${isActive(item.href, item.exact) ? styles.navLinkActive : ''}`}
                    >
                      <FontAwesomeIcon icon={item.icon} className={styles.navIcon} />
                      <span className={styles.navLabel}>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.sidebarFooter}>
              <div className={styles.userInfo}>
                <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
                <span className={styles.userLabel}>Administrator</span>
              </div>
              <div className={styles.signOutWrapper}>
                <SignOutButton />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
}