import styles from './BacteriumFx.module.scss';
import svgStar1 from '../../images/effects/star_1.svg';
import svgStar2 from '../../images/effects/star_2.svg';
import svgStar3 from '../../images/effects/star_3.svg';
import svgDots1 from '../../images/effects/dots_1.svg';
import svgDots2 from '../../images/effects/dots_2.svg';
import svgDots3 from '../../images/effects/dots_3.svg';
export const BactertiumFx = () => {
  return (

    <div className={styles.bacteriumFx}>
      <img src={svgStar1} alt="svg star" className={`${styles.bacteriumFx__star} ${styles.bacteriumFx__star_size_s}`} />
      <img src={svgStar2} alt="svg star" className={`${styles.bacteriumFx__star} ${styles.bacteriumFx__star_size_m}`} />
      <img src={svgStar3} alt="svg star" className={`${styles.bacteriumFx__star} ${styles.bacteriumFx__star_size_l}`} />
      <img src={svgDots1} alt="svg dots" className={`${styles.bacteriumFx__dots} ${styles.bacteriumFx__dots_size_s}`} />
      <img src={svgDots2} alt="svg dots" className={`${styles.bacteriumFx__dots} ${styles.bacteriumFx__dots_size_m}`} />
      <img src={svgDots3} alt="svg dots" className={`${styles.bacteriumFx__dots} ${styles.bacteriumFx__dots_size_l}`} />
    </div>

  );
}