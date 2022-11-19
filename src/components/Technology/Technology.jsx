import { RoundAroundFx } from "../RoundAroundFx/RoundAroundFx";
import { SquareFx } from '../SquareFx/SquareFx';
import styles from './Technology.module.scss';

export const Technology = () => {
  return (
    <section className={styles.technology}>
    <div className={styles.technology__items}>
      <div className={styles.technology__item}>
        <RoundAroundFx />
        <p className={styles.technology__paragraph}>We use advanced technology. Our sites are fully responsive. Users will get a pleasant experience on any screen resolutions.</p>
      </div>
      <div className={styles.technology__item}>
        <SquareFx />
        <p className={styles.technology__paragraph}>Let's create an original design. This will reflect your personality and make a clear advantage among all competitors.</p>
      </div>
    </div>
  </section>

  );
}