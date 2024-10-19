import styles from "./Library.module.css";
import libraryImg from "/library.jpg";

const Library = () => {
  return (
    <div className="container">
      <div className={styles.course}>
        <div className={styles.texts}>
          <div className={styles.title}>Библиотека</div>
          <div className={styles.subText}>
            коллекция ресурсов, материалов и контента, предоставляемых в рамках
            приложения для помощи пользователям в изучении языка.
          </div>
        </div>
        <div className={styles.courseImage}>
          <img src={libraryImg} alt="Course" />
        </div>
      </div>
    </div>
  );
};

export default Library;
