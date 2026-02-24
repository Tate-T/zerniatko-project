import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./CategoriesList.module.css"

export default function CategoriePage() {
  return (
    <>
      <Header />

      <main className={style.categorie}> 
        <Container>
          <h2 className={style.categorie__title}>Категорії</h2>
          <CategoriesList />

          <div className={style.categorie__div}><button className={style.categorie__btn}>Показати більше</button></div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
