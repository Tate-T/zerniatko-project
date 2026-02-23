import ProductsItem from "../ProductsItem/ProductsItem";
import styles from "./ProductsList.module.css";

export default function ProductsList() {
  return (
    <ul className={styles.list}>
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
      <ProductsItem />
    </ul>
  );
}
