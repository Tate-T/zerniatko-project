import StarIcon from "../../images/review-star.svg";
import styles from "./ProductsItem.module.css";

export default function ProductsItem({ product }) {
  return (
    <li className={styles.item}>
      <article>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.stars}>
            <img src={StarIcon} alt="star" className={styles.starIcon} />
            <img src={StarIcon} alt="star" className={styles.starIcon} />
            <img src={StarIcon} alt="star" className={styles.starIcon} />
            <img src={StarIcon} alt="star" className={styles.starIcon} />
            <img src={StarIcon} alt="star" className={styles.starIcon} />
          </span>

          <h3 className={styles.name}>{product.name}</h3>

          <p className={styles.description}>{product.description}</p>

          <span className={styles.price}>{product.price} грн</span>
        </div>

        <a href="#" className={styles.link}>
          Детальніше
        </a>
      </article>
    </li>
  );
}
