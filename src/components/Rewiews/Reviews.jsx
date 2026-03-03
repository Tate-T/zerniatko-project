import reviewsStar from "../../images/review-star.svg";
import categorieArrow from "../../images/arrow.png";
import { Container } from "../Container/ContainerLayout.jsx";
import reviewsStyles from "./Reviews.module.css";

export default function Rewiews() {
  return (
    <section className={reviewsStyles.reviews}>
      <Container>
        <h2 className="reviews_title">Останні відгуки</h2>
        <ul className={reviewsStyles.reviews_holder}>
          <li className={reviewsStyles.reviews_card}>
            <div className={reviewsStyles.star_holder}>
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
            </div>

            <p className={reviewsStyles.reviews_card_text}>
              Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й
              ароматом шоколаду. Ідеально підходить для ранкового еспресо.
            </p>

            <p className={reviewsStyles.reviews_card_name}>Олена Коваль</p>

            <p className={reviewsStyles.reviews_card_product}>Еспресо Класік</p>
          </li>
          <li className={reviewsStyles.reviews_card}>
            <div className={reviewsStyles.star_holder}>
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
            </div>

            <p className={reviewsStyles.reviews_card_text}>
              Френч-прес якісний і зручний у використанні. Скло міцне, фільтр
              добре працює, кава виходить ароматною й чистою. Точно вартий своєї
              ціни.
            </p>

            <p className={reviewsStyles.reviews_card_name}>Ігор Петров</p>

            <p className={reviewsStyles.reviews_card_product}>
              Френч-прес Classic 600 мл
            </p>
          </li>
          <li className={reviewsStyles.reviews_card}>
            <div className={reviewsStyles.star_holder}>
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
              <img
                className={reviewsStyles.card_star}
                src={reviewsStar}
                alt="star"
              />
            </div>

            <p className={reviewsStyles.reviews_card_text}>
              Купив для роботи — тримає тепло кілька годин, дизайн
              мінімалістичний і стильний. Дуже зручно брати з собою каву в
              дорогу.
            </p>

            <p className={reviewsStyles.reviews_card_name}>Ігор Шевченко</p>

            <p className={reviewsStyles.reviews_card_product}>
              Термочашка Зернятко 350 мл
            </p>
          </li>
        </ul>
        <ul className={reviewsStyles.slider_button_list}>
          <li className={reviewsStyles.slider_button_item}>
            <button
              className={reviewsStyles.slider_button}
              type="button"
            ></button>
          </li>
          <li className={reviewsStyles.slider_button_item}>
            <button
              className={reviewsStyles.slider_button}
              type="button"
            ></button>
          </li>
          <li className={reviewsStyles.slider_button_item}>
            <button
              className={reviewsStyles.slider_button}
              type="button"
            ></button>
          </li>
          <li className={reviewsStyles.slider_button_item}>
            <button
              className={reviewsStyles.slider_button}
              type="button"
            ></button>
          </li>
          <li className={reviewsStyles.slider_button_item}>
            <button
              className={reviewsStyles.slider_button}
              type="button"
            ></button>
          </li>
        </ul>
        <ul className={reviewsStyles.slider_arrow_list}>
          <li className={reviewsStyles.slider_arrow_list_item}>
            <button className={reviewsStyles.slider_arrow_button} type="button">
              <img
                className={reviewsStyles.slider_button_img}
                src={categorieArrow}
                alt="<-"
              />
            </button>
          </li>
          <li className={reviewsStyles.slider_arrow_list_item}>
            <button className={reviewsStyles.slider_arrow_button} type="button">
              <img
                className={reviewsStyles.slider_button_img}
                src={categorieArrow}
                alt="->"
              />
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
}
