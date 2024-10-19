import styles from "./Game.module.css";
import gameImg from "/game.jpg";

const Game = () => {
  return (
    <div className="container">
      <div className={styles.course}>
        <div className={styles.courseImage}>
          <img src={gameImg} alt="Game" />
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>Игры</div>
          <div className={styles.subText}>
            это интерактивные развлекательные задания или активности,
            разработанные для помощи пользователям в улучшении своих языковых
            навыков. Они предлагают игровой подход к обучению, предоставляя
            пользователям возможность практиковать и закреплять свои знания
            через разнообразные игровые задачи и упражнения.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
