import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__title}>Nothing found</h1>
      <div className={styles.projects__messageContainer}>
        <p className={styles.projects__subscription}>There are no completed projects at the moment. However, you can visit <span className={styles.projects__accent}>the creator's page on github:</span></p>
        <a className={styles.projects__link} href="https://github.com/DannyLawn" target="_blank" rel="noreferrer" >Ссылка на гитхаб</a>
      </div>
    </section>
  );
}