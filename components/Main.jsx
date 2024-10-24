// components/Main.js
import styles from './Main.module.css';

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      <div className="content">{children}</div>
    </main>
  );
}
