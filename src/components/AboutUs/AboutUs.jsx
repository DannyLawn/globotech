import LogoWhite from '../../images/GBTH_icon_white.png';
import { TitleScrollerFx } from '../TitleScrollerFx/TitleScrollerFx';
import { useDispatch } from 'react-redux';
import { openMainPage } from '../../services/slices/app-navigation-slice';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {

  const dispatch = useDispatch();

  return (
    <section className={styles.aboutUs}>
      <nav class="back-to-main" className={styles.backToMain}>
        <a className={styles.backToMain__link} onClick={()=>dispatch(openMainPage())}>
          <p className={styles.backToMain__text}>⟵</p>
          <img className={styles.backToMain__img} src={LogoWhite} alt="The planet-globotech logo." />
        </a>
      </nav>
      <TitleScrollerFx />
    </section>
  );
}