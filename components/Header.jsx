import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.top}`}>
        <span className={styles.menu}>☰</span>
        <h1 className={styles.logo}>LOGO</h1>

        <div className={styles.icons}>
          <span>🔍</span>
          <span>♡</span>
          <span>🛒</span>
          <span>👤</span>
          <span>ENG ▾</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className="container">
          <Link href="/">Shop</Link>
  <Link href="/skills">Skills</Link>
  <Link href="/stories">Stories</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
