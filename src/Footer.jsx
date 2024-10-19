import styles from "./Footer.module.css";
import instagram from "/instagram.png";
import tiktok from "/tiktok.png";

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <div className={styles.title}>Разделы</div>
            <div className={styles.menuItems}>
              <a href="#home">Главная</a>
              <a href="#about">О приложении</a>
              <a href="#download">Скачать приложение</a>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.title}>Мы в соцсетях</div>
            <div className={styles.socialItems}>
              <a
                href="https://www.instagram.com/lengua.8?igsh=MWg4czExdTdrbnQ5eQ=="
                target="_blank"
                className={styles.socialItem}
              >
                <img src={instagram} alt="Instagram" />
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@lengua__8?_t=8prBQ6wlUTW&_r=1"
                target="_blank"
                className={styles.socialItem}
              >
                <img src={tiktok} alt="Tiktok" />
                Tiktok
              </a>
            </div>
          </div>
          <div className={styles.download}>
            <div>Техническая поддержка:</div>
            <a href="mailto: lengua8.help@gmail.com" style={{ color: "#fff" }}>
              lengua8.help@gmail.com
            </a>
            <a href="/privacy-policy.html" style={{ color: "#fff" }}>
              Privacy and Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
