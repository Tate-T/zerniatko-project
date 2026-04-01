import ProductsItem from "../ProductsItem/ProductsItem";
import styles from "./ProductsList.module.css";

export default function ProductsList({ products }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
