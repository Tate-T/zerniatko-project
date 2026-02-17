import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Container } from "../../components/Container/ContainerLayout.jsx";

export default function CategoriePage() {
  return (
    <>
      <Header />

      <main>
        <Container>
          <h2>Категорії</h2>
          <CategoriesList />

          <button>Показати більше</button>
        </Container>
      </main>

      <Footer />
    </>
  );
}
