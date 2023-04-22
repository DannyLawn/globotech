import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Ничего не найдено</h1>
      <div className={styles.projects__messageContainer}>
        <p className={styles.projects__subscription}>Но вы можете посетить <span className={styles.projects__accent}>github:</span></p>
        <a className={styles.projects__link} href="https://github.com/DannyLawn" target="_blank"  rel="noreferrer" >Ссылка на гитхаб</a>
      </div>
    </section>
  );
}