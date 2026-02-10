import reviewsStar from "../../images/review-star.svg";
import categorieArrow from "../../images/arrow.png";

export default function Rewiews() {
  return (
    <section>
      <div>
        <ul>
          <li>
            <div>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>

            <p>
              Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й
              ароматом шоколаду. Ідеально підходить для ранкового еспресо.
            </p>

            <p>Олена Коваль</p>

            <p>Еспресо Класік</p>
          </li>
          <li>
            <div>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>

            <p>
              Френч-прес якісний і зручний у використанні. Скло міцне, фільтр
              добре працює, кава виходить ароматною й чистою. Точно вартий своєї
              ціни.
            </p>

            <p>Ігор Петров</p>

            <p>Френч-прес Classic 600 мл</p>
          </li>
          <li>
            <div>
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
              <img src={reviewsStar} alt="star" />
            </div>

            <p>
              Купив для роботи — тримає тепло кілька годин, дизайн
              мінімалістичний і стильний. Дуже зручно брати з собою каву в
              дорогу.
            </p>

            <p>Ігор Шевченко</p>

            <p>Термочашка Зернятко 350 мл</p>
          </li>
        </ul>
        <ul>
          <li>
            <button type="button"></button>
          </li>
          <li>
            <button type="button"></button>
          </li>
          <li>
            <button type="button"></button>
          </li>
          <li>
            <button type="button"></button>
          </li>
          <li>
            <button type="button"></button>
          </li>
        </ul>
        <ul>
          <li>
            <button type="button">
              <img src={categorieArrow} alt="<-" />
            </button>
          </li>
          <li>
            <button type="button">
              <img src={categorieArrow} alt="->" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
