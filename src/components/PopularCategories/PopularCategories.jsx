import style from "./PopularCategories.module.css";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { Container } from "../Container/ContainerLayout";

export default function PopularCategories() {
  return (
    <section className={style.section}>
      <Container>
        <div>
          <div className={style.main_info}>
            <h1 className={style.main_text}>Популярні категорії</h1>
            <button className={style.all_categories_btn}>Всі категорії</button>
          </div>
        </div>
        <div className={style.categories_container}>
          <CategoriesList />
        </div>
      </Container>
    </section>
  );
}