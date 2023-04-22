import { BactertiumFx } from '../BacteriumFx/BacteriumFx';
import styles from './Description.module.scss';

export const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.description__container}>
        <p className={styles.description__subtitle}>Разработка под вашу целевую аудиторию. Ничего лишнего. Только то, что нужно бизнесу. </p>
        <div className={styles.description__wrapper}>
          <BactertiumFx />
        </div>
      </div>
    </section>
  )
}