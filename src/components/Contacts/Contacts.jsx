import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__item}>
        <h1 className={styles.contacts__title}>Электронная почта:</h1>
        <a className={styles.contacts__description} href="mailto:danny.lawn@ya.ru">danny.lawn@ya.ru</a>
      </div>
      <div className={styles.contacts__item}>
        <h1 className={styles.contacts__title}>Телефон:</h1>
        <a className={styles.contacts__description} href="tel:+79219843445">8 (921) 984-34-45</a>
      </div>
    </section>
  );
}