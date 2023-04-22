import { initialProducts } from '../../utils/data.js';
import styles from './Products.module.scss';

export const Products = () => {
  return (
    <section className={styles.products}>
      <ul className={styles.products__container}>
        {
          initialProducts.map((product, index) => (
            <li className={styles.products__item} key={index}>
              <img className={styles.products__image} src={product.image} alt={product.name} />
              <div className={styles.products__textContainer}>
                <h1 className={styles.products__title}>{product.name}</h1>
                <p className={styles.products__text}>{product.description}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}