import { RoundAroundFx } from "../RoundAroundFx/RoundAroundFx";
import { SquareFx } from '../SquareFx/SquareFx';
import styles from './Technology.module.scss';

export const Technology = () => {
  return (
    <section className={styles.technology}>
    <div className={styles.technology__items}>
      <div className={styles.technology__item}>
        <RoundAroundFx />
        <p className={styles.technology__paragraph}>Мы используем передовые технологии и наши сайты полностью адаптивны. Пользователи получат приятный опыт на любых устройствах.</p>
      </div>
      <div className={styles.technology__item}>
        <SquareFx />
        <p className={styles.technology__paragraph}>Созданный оригинальный дизайн отразит вашу индивидуальность и даст явное преимущество среди конкурентов.</p>
      </div>
    </div>
  </section>

  );
}