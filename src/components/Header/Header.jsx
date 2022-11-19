import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openMainPage, openServicesPage, openProjectsPage, openContactsPage, openAboutUsPage} from '../../services/slices/app-navigation-slice';
import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const { productsState, projectsState,
    contactsState } = useSelector(store => store.appNavigation);


  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a className={styles.header__logo} onClick={() => dispatch(openMainPage())} />
        <nav className={styles.header__nav}>
          <ul className={styles.header__navItems}>
            <a className={`${styles.header__navLink} ${styles.header__link}`} onClick={()=>dispatch(openAboutUsPage())}>
              <li className={styles.header__navItem}>About us</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link} ${productsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openServicesPage())}>
              <li className={styles.header__navItem}>Services</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link} ${projectsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openProjectsPage())}>
              <li className={styles.header__navItem}>Projects</li>
            </a>
            <a className={`${styles.header__navLink} ${styles.header__link} ${contactsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openContactsPage())}>
              <li className={styles.header__navItem}>Contacts</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  )
}