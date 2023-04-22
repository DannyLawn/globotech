import { useDispatch, useSelector} from 'react-redux';
import { openMainPage, openServicesPage, openProjectsPage, openContactsPage, openAboutUsPage} from '../../services/slices/app-navigation-slice';
import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const { productsState, projectsState,
    contactsState } = useSelector(store => store.appNavigation);
 
    
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo} onClick={() => dispatch(openMainPage())} />
        <nav className={styles.header__nav}>
          <ul className={styles.header__navItems}>
            <div className={`${styles.header__navLink} ${styles.header__link}`} onClick={()=>dispatch(openAboutUsPage())}>
              <li className={styles.header__navItem}>О нас</li>
            </div>
            <div className={`${styles.header__navLink} ${styles.header__link} ${productsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openServicesPage())}>
              <li className={styles.header__navItem}>Услуги</li>
            </div>
            <div className={`${styles.header__navLink} ${styles.header__link} ${projectsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openProjectsPage())}>
              <li className={styles.header__navItem}>Проекты</li>
            </div>
            <div className={`${styles.header__navLink} ${styles.header__link} ${contactsState ? styles.header__navLink_active : ''}`} onClick={()=>dispatch(openContactsPage())}>
              <li className={styles.header__navItem}>Контакты</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}