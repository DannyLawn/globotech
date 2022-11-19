import { BactertiumFx } from '../BacteriumFx/BacteriumFx';
import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.description__container}>
        <p className={styles.description__subtitle}>Website development for your target audience. Just what the business needs. Nothing superfluous.</p>
        <div className={styles.description__wrapper}>
          <BactertiumFx />
        </div>
      </div>
    </section>
  )
}