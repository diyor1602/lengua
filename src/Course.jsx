import styles from "./Course.module.css";
import courseImg from "/course.jpg";

const Course = () => {
  return (
    <div className="container">
      <div className={styles.course}>
        <div className={styles.texts}>
          <div className={styles.title}>Курсы</div>
          <div className={styles.subText}>
            это специально разработанные программы обучения, предлагаемые в
            рамках приложения, чтобы помочь пользователям освоить определенный
            язык. Они могут включать в себя различные уровни сложности, начиная
            с основных основ языка и постепенно продвигаясь к более сложным
            темам и концепциям
          </div>
        </div>
        <div className={styles.courseImage}>
          <img src={courseImg} alt="Course" />
        </div>
      </div>
    </div>
  );
};

export default Course;
