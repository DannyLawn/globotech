import vkLogo from '../../images/social/vk_white.svg';
import instLogo from '../../images/social/instagram_white.svg';
import logoFooter from '../../images/logo_white.png';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__socialContainer}>
          <h3 className={styles.footer__socialTitle}>Социальные сети</h3>
          <nav className={styles.footer__navSocial}>
            <ul className={styles.footer__socialItems}>
              <li className={styles.footer__socialItem}>
                <a href="https://vk.com/dannylawn" className={styles.footer__socialItemLink} target="_blank"  rel="noreferrer">
                  <img className={styles.footer__socialImage} src={vkLogo} alt="Logo VK." />Vkontakte
                </a>
              </li>
              <li className={styles.footer__socialItem}>
                <a href="https://instagram.com/danny_lawn" className={styles.footer__socialItemLink} target="_blank"  rel="noreferrer">
                  <img className={styles.footer__socialImage} src={instLogo} alt="Logo polaroid." />Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <figure>
          <img src={logoFooter} className={styles.footer__logo} alt="Белый логотип глоботек." />
          <figcaption className={styles.footer__caption}>© 2022 Globotech, Inc. All Rights Reserved.</figcaption>
        </figure>
      </div>
    </footer>
  );
}