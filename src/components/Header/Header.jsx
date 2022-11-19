import React from "react";
import styles from './Header.module.scss';

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a className={styles.header__logo}></a>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navItems}>
            <a className={`${styles.header__navLink} ${styles.header__link}`}>
              <li className={styles.header__navItem}>About us</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link}`}>
              <li className={styles.header__navItem}>Services</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link}`}>
              <li className={styles.header__navItem}>Projects</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link}`}>
              <li className={styles.header__navItem}>Contacts</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  )
}