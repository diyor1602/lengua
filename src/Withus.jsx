import styles from "./Withus.module.css";
import appStore from "/appStore.png";
import googlePlay from "/googlePlay.png";
import phone1 from "/phone1.jpg";
import phone2 from "/phone2.jpg";
import CountButton from "./components/CountButton";

const Withus = () => {
  return (
    <div className="container" id="download">
      <div className={styles.showcase}>
        <div className={styles.texts}>
          <div className={styles.title}>Изучайте языки с нами! </div>
          {/* <div className={styles.subText}>
            Убери запишитесь на бесплатные онлайн языковые курсы потому что у
            нас не школа мы приложение все построено на ии
          </div> */}
          <div className={styles.buttons}>
            <button className={styles.button}>
              <a
                href="https://apps.apple.com/uz/app/lengua8-language-learning/id6606032144"
                target="_blank"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  width="150px"
                  id="count-button"
                />
              </a>
            </button>
            <CountButton className={styles.button} />
            {/* <button className={styles.button}>
              <img src={googlePlay} alt="Google Play" />
            </button> */}
          </div>
        </div>
        <div className={styles.imageTitle}>Изучайте языки с нами!</div>
        <div className={styles.showcaseImage}>
          <div className={styles.phoneBorder}>
            <img src={phone1} alt="Phone 1" />
            <img src={phone2} alt="Phone 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withus;
