import styles from "./Languages.module.css";
import germany from "/germany.png";
import france from "/france.png";
import spain from "/spain.png";
import italy from "/italy.png";
import japan from "/japan.png";
import china from "/china.png";
import southkorea from "/southkorea.png";
import poland from "/poland.png";
import greece from "/greece.png";
import uae from "/uae.png";
import russia from "/russia.png";
import list1 from "/list1.png";
import list2 from "/list2.png";
import list3 from "/list3.png";
import list4 from "/list4.png";

const Languages = () => {
  return (
    <div className="container" id="about">
      <div className={styles.languages}>
        <div className={styles.languagesNavbar}>
          <div className={styles.languageNavTitle}>
            Основные языки, которые изучаются в приложении:
          </div>
          <div className={styles.languageImages}>
            <img src={spain} alt="Spain" />
            <img src={france} alt="France" />
            <img src={italy} alt="Italy" />
            <img src={poland} alt="Poland" />
            <img src={greece} alt="Greece" />
            <img src={southkorea} alt="South Korea" />
            <img src={uae} alt="UAE" />
            <img src={china} alt="China" />
            <img src={japan} alt="Japan" />
            <img src={germany} alt="Germany" />
            <img src={russia} alt="Russia" />
          </div>
        </div>
        <div className={styles.langugesDescription}>
          <div className={styles.langugeDescTitle}>Lengua8 - это...</div>
          <div className={styles.langDescList}>
            <div className={styles.langDescItem}>
              <div className={styles.langDescTitle}>
                1 - Предоставление структурированных курсов
              </div>
              <div className={styles.langDescText}>
                Приложение для изучения языков предлагает структурированные
                курсы, которые позволяют пользователям последовательно изучать
                язык от базовых до более сложных уровней. Это помогает
                пользователям понять логику языка, освоить грамматику, улучшить
                свой словарный запас и развить навыки говорения, чтения и
                понимания на слух.
              </div>
              <img src={list1} alt="List1" />
            </div>
            <div className={styles.langDescItem}>
              <img src={list2} alt="List2" />
              <div className={styles.langDescTitle}>
                2 - Интерактивные упражнения и задания
              </div>
              <div className={styles.langDescText}>
                Приложение предлагает разнообразные интерактивные упражнения и
                задания, которые способствуют активному и практическому обучению
                языку. Игровые задания, вопросы-ответы, составление предложений
                и другие упражнения помогают пользователю закрепить свои знания
                и навыки.
              </div>
            </div>
            <div className={styles.langDescItem}>
              <div className={styles.langDescTitle}>
                3 - Словарный запас и грамматика
              </div>
              <div className={styles.langDescText}>
                Приложение предлагает доступ к обширной базе данных слов и фраз,
                а также грамматическим правилам. Это помогает пользователям
                расширить свой словарный запас, изучить правильное использование
                слов и фраз, а также понять основы грамматики языка.
              </div>
              <img src={list3} alt="List3" />
            </div>
            <div className={styles.langDescItem}>
              <img src={list4} alt="List4" />
              <div className={styles.langDescTitle}>
                4 - Проверка и коррекция ошибок
              </div>
              <div className={styles.langDescText}>
                Приложение предлагает функцию проверки и коррекции ошибок
                пользователя в письменной и устной форме. Такой инструмент
                позволяет пользователям улучшать свои навыки и избегать
                повторения ошибок, а также получать более точную обратную связь.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
