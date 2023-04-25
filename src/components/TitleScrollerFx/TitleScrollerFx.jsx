import Logo from '../../images/GBTH_icon_SVG (white).svg';
import styles from './TitleScrollerFx.module.scss';

export const TitleScrollerFx = () => {
  return (
    <>
      <div className={styles.titleScrollerFx__intro}>
        Настало время<br />познакомиться ближе...
      </div>
      <img className={styles.titleScrollerFx__logo} src={Logo} alt="Логотип-планета, которая отдаляется и исчезает." />
      <div className={styles.titleScrollerFx__scroller}>
        <div className={styles.titleScrollerFx__content}>
          <h1 className={styles.titleScrollerFx__title}>Globotech</h1>
          <br />
          <p className={styles.titleScrollerFx__text}>
          Прогресс всегда основан на технологиях. Они дают компаниям возможность расти и развиваться, а самое главное – адаптироваться к текущим условиям. Инновации – это огромное конкурентное преимущество для бизнеса. Они увеличивают прибыль и снижают затраты, но самое главное – делают мир лучше и комфортнее. Малый и средний бизнес в условиях пандемии сильно страдает. Особенно уязвимы те компании, которые до карантина работали в автономном режиме. Чтобы двигаться вперед, им нужны перспективные идеи и технологии.
          </p>
          <br />
          <p className={styles.titleScrollerFx__text}>
          Наша команда основана в 2022 году. Учитывая, что активная деятельность только начинается, готовы предоставить самые выгодные условия. 
          </p>
          <br />
          <p className={styles.titleScrollerFx__text}>
          Мы найдём индивидуальный подход к каждому партнёру. Если у вас уже есть идеи, отправляйте заявку для бесплатной консультации. Удачи!
          </p>
          <br />
          {/* <p className={`${styles.titleScrollerFx__text} ${styles.titleScrollerFx__text_copyright}`}>
            Globotech &copy;
          </p> */}
        </div>
      </div>
    </>
  );
}