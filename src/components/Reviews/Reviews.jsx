import reviewsStar from "../../images/review-star.svg";
import categorieArrow from "../../images/arrow.png";
import { Container } from "../Container/ContainerLayout.jsx";
import styles from "./Reviews.module.css";

export default function Rewiews() {
  return (
    <section className={styles.section}>
      <Container>
        {}
        <h2 className={styles.sectionTitle}>Останні відгуки</h2>

        {}
        <ul className={styles.reviewsList}>
          <li className={styles.reviewCard}>
            <div className={styles.stars}>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>
            <p className={styles.reviewText}>
              Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й
              ароматом шоколаду. Ідеально підходить для ранкового еспресо.
            </p>
            <p className={styles.reviewerName}>Олена Коваль</p>
            <p className={styles.productName}>Еспресо Класік</p>
          </li>

          <li className={styles.reviewCard}>
            <div className={styles.stars}>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>
            <p className={styles.reviewText}>
              Френч-прес якісний і зручний у використанні. Скло міцне, фільтр
              добре працює, кава виходить ароматною й чистою. Точно вартий своєї
              ціни.
            </p>
            <p className={styles.reviewerName}>Ігор Петров</p>
            <p className={styles.productName}>Френч-прес Classic 600 мл</p>
          </li>

          <li className={styles.reviewCard}>
            <div className={styles.stars}>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>
            <p className={styles.reviewText}>
              Купив для роботи — тримає тепло кілька годин, дизайн
              мінімалістичний і стильний. Дуже зручно брати з собою каву в
              дорогу.
            </p>
            <p className={styles.reviewerName}>Ігор Шевченко</p>
            <p className={styles.productName}>Термочашка Зернятко 350 мл</p>
          </li>
        </ul>

        {/* Пагінація */}
        <ul className={styles.dotsList}>
          <li>
            <button type="button" className={styles.dot}></button>
          </li>
          <li>
            <button type="button" className={styles.dot}></button>
          </li>
          <li>
            <button type="button" className={styles.dot}></button>
          </li>
          <li>
            <button type="button" className={styles.dot}></button>
          </li>
          <li>
            <button type="button" className={styles.dot}></button>
          </li>
        </ul>

        {}
        <ul className={styles.arrowsList}>
          <li>
            <button type="button" className={styles.arrowBtn}>
              <img src={categorieArrow} alt="<-" />
            </button>
          </li>
          <li>
            <button type="button" className={styles.arrowBtn}>
              <img src={categorieArrow} alt="->" />
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
}
