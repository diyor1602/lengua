import CountButton from "./components/CountButton";
import styles from "./Showcase.module.css";
import appStore from "/appStore.png";
import googlePlay from "/googlePlay.png";
import phone1 from "/phone1.jpg";
import phone2 from "/phone2.jpg";

const Showcase = () => {
  return (
    <div className="container" id="home">
      <div className={styles.showcase}>
        <div className={styles.texts}>
          <div className={styles.title}>Приложение для изучения языков</div>
          <div className={styles.subText}>Изучайте языки с нами </div>
          <div className={styles.textList}>
            <div className={styles.textListItem}>
              <div className={styles.dot}></div> Игры
            </div>
            <div className={styles.textListItem}>
              <div className={styles.dot}></div> Библиотека
            </div>
            <div className={styles.textListItem}>
              <div className={styles.dot}></div> Speaking club
            </div>
          </div>
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
            <CountButton />
          </div>
        </div>
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

export default Showcase;
