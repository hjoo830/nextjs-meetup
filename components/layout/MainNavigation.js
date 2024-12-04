import Link from "next/link";
import React from "react";
import styles from "@/styles/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetup Together</div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navItem}>
              모든 모임
            </Link>
          </li>
          <li>
            <Link href="/new-meetup" className={styles.navItem}>
              새로운 모임 추가
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
