import styles from './LineFx.module.scss';

export const LineFx = () => {
  return (
    <div className={styles.lineFx}>
      <div className={`${styles.lineFx__row} ${styles.lineFx__row_size_l}`} />
      <div className={`${styles.lineFx__row} ${styles.lineFx__row_size_m}`} />
      <div className={`${styles.lineFx__row} ${styles.lineFx__row_size_s}`} />
      <div className={`${styles.lineFx__row} ${styles.lineFx__row_size_xs}`} />
    </div>
  );
}