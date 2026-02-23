import React from "react";
import { Container } from "../Container/ContainerLayout.jsx";
import styles from "./ProductsItem.module.css";

export default function ProductsItem() {
  return (
    <li className={styles.item}>
      <article>
        <div className={styles.imageWrapper}>
          <img src="" alt="" className={styles.image} />
        </div>

        <div className={styles.content}>
          <span className={styles.rating}></span>

          <h3 className={styles.name}>Еспресо Класік</h3>

          <p className={styles.description}>
            Суміш арабіки та робусти з насиченим смаком і нотами темного
            шоколаду.
          </p>

          <span className={styles.price}>280грн</span>
        </div>

        <a href="#" className={styles.link}>
          Детальніше
        </a>
      </article>
    </li>
  );
}
