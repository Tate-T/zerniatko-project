import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

export default function CategoriePage() {
  return (
    <>
      <Header />

      <main>
        <h2>Категорії</h2>
        <CategoriesList />
      
          <button>Показати більше</button>
          </main>

          
      <Footer />
    </>
  );
}
