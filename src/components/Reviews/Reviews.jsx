import { Component, createRef } from "react";
import reviewsStar from "../../images/review-star.svg";
import categorieArrow from "../../images/arrow.png";
import { Container } from "../Container/ContainerLayout.jsx";
import styles from "./Reviews.module.css";
import { RewiewsModal } from "./modalRewiews";

export class Rewiews extends Component {
  state = {
    modal: false,
    reviews: JSON.parse(localStorage.getItem("reviews")) || [
      {
        text: "Дуже сподобалася ця кава! Смак насичений, з легкою гірчинкою й ароматом шоколаду. Ідеально підходить для ранкового еспресо.",
        name: "Олена Коваль",
        product: "Еспресо Класік",
      },
      {
        text: "Френч-прес якісний і зручний у використанні. Скло міцне, фільтр добре працює, кава виходить ароматною й чистою. Точно вартий своєї ціни.",
        name: "Ігор Петров",
        product: "Френч-прес Classic 600 мл",
      },
      {
        text: "Купив для роботи — тримає тепло кілька годин, дизайн мінімалістичний і стильний. Дуже зручно брати з собою каву в дорогу.",
        name: "Ігор Шевченко",
        product: "Термочашка Зернятко 350 мл",
      },
      {
        text: "Чудовий сервіс і швидка доставка. Кава свіжа, ароматна, добре обсмажена. Обов’язково замовлю ще раз.",
        name: "Марія Іваненко",
        product: "Арабіка Преміум",
      },
    ],
  };

  reviewsRef = createRef();

  modModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  addReview = (newReview) => {
    this.setState((previousState) => {
      const updatedReviews = [newReview, ...previousState.reviews];

      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      return {
        reviews: updatedReviews,
      };
    });
  };

  deleteReview = (indexToDelete) => {
    this.setState((previousState) => {
      const updatedReviews = previousState.reviews.filter(
        (_, index) => index !== indexToDelete,
      );
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));
      return { reviews: updatedReviews };
    });
  };

  nextSlide = () => {
    const container = this.reviewsRef.current;
    const cardWidth = 320 + 73;

    if (container) {
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  prevSlide = () => {
    const container = this.reviewsRef.current;
    const cardWidth = 320 + 73;

    if (container) {
      container.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <section className={styles.section}>
        <Container>
          <div className={styles.headTitle}>
            <h2 className={styles.sectionTitle}>Останні відгуки</h2>

            <button onClick={this.modModal} className={styles.write_review}>
              Залишити відгук
            </button>
          </div>

          {this.state.modal && (
            <RewiewsModal
              onClose={this.modModal}
              onAddReview={this.addReview}
            />
          )}

          <ul className={styles.reviewsList} ref={this.reviewsRef}>
            {this.state.reviews.map((review, index) => (
              <li key={index} className={styles.reviewCard}>
                <div className={styles.reviewCardHeader}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={reviewsStar} alt="star" />
                    ))}
                  </div>

                  <button
                    onClick={() => this.deleteReview(index)}
                    className={styles.deleteBtn}
                  >
                    Видалити
                  </button>
                </div>

                <p className={styles.reviewText}>{review.text}</p>
                <p className={styles.reviewerName}>{review.name}</p>
                <p className={styles.productName}>{review.product}</p>
              </li>
            ))}
          </ul>

          {}

          <div className={styles.controls}>
            <ul className={styles.arrowsList}>
              <li>
                <button
                  type="button"
                  className={styles.arrowBtn}
                  onClick={this.prevSlide}
                >
                  <img src={categorieArrow} alt="<-" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={styles.arrowBtn}
                  onClick={this.nextSlide}
                >
                  <img src={categorieArrow} alt="->" />
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    );
  }
}
