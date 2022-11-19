import Logo from '../../images/GBTH_icon_SVG (white).svg';
import styles from './TitleScrollerFx.module.scss';

export const TitleScrollerFx = () => {
  return (
    <>
      <div className={styles.titleScrollerFx__intro}>
        It's time to learn more <br /> about us...
      </div>
      <img className={styles.titleScrollerFx__logo} src={Logo} alt="Логотип-планета, которая отдаляется и исчезает." />
      <div className={styles.titleScrollerFx__scroller}>
        <div className={styles.titleScrollerFx__content}>
          <h1 className={styles.titleScrollerFx__title}>Globotech</h1>
          <br />
          <p className={styles.titleScrollerFx__text}>
            Progress is always based on new technologies. They give companies the opportunity to grow and develop, and most importantly – to adapt to the current conditions.
            For business, innovation is a huge competitive advantage. They increase profits and reduce costs,
            but most importantly, they make the world a better place and our life more comfortable. Small and medium-sized businesses in a pandemic
            they suffer a lot. Especially vulnerable are those companies that worked offline before the quarantine. To move forward, they need promising ideas and technologies.
          </p>
          <br />
          <p className={styles.titleScrollerFx__text}>
            Our team was founded in 2022, headed by Daniel Nikitin. Considering that active activity is just beginning,
            we are ready to provide the most pleasant prices for our customers. At the moment we are only taking on landing pages. And in the future
            it will be possible to develop services, portals and any other desktop web systems. Creation of mobile applications, integration with their web versions.
            Any complex automation solutions that solve business problems.
          </p>
          <br />
          <p className={styles.titleScrollerFx__text}>
            We will find an individual approach to each client, develop a design layout and implement unusual features.
            Meet on the cover, an interesting interface will make the product competitive. If you already have ideas:
            we will listen, draw up the terms of reference and take up the development.
          </p>
          <br />
          <p className={`${styles.titleScrollerFx__text} ${styles.titleScrollerFx__text_copyright}`}>
            Globotech &copy;
          </p>
        </div>
      </div>
    </>
  );
}