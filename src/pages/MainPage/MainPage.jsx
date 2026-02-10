import Header from "../../components/Header/Header";
import Rewiews from "../../components/Rewiews/Reviews";
import ProductsList from "../../components/ProductsList/ProductsList";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";


import heroImage from "../../assets/hero.png";
import categorieArrow from "../../images/arrow.png";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <h1>Зернятко — твій шлях до справжньої кави</h1>
            <p>
              Ми створили місце, де кожен знайде все для свого кавового ритуалу:
              від зерен преміум-якості до стильних аксесуарів для приготування.
              Почни день із натхненням та обирай товари, що розкривають
              унікальний смак твоєї кави.
            </p>
            <ul>
              <li>
                <a href="#">До товарів</a>
              </li>
              <li>
                <a href="#">Дослідити категорії</a>
              </li>
            </ul>
            <div className="">
              <img src={heroImage} alt="coffee" />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Популярні товари</h2>
            <a href="#">Всі товари</a>
            <ProductsList />
          </div>
        </section>
        <section>
          <div className="container">
            <h2>Чому варто обрати Зернятко?</h2>
            <ul>
              <li>
                <article>
                  <img src="" alt="" />
                  <h3>Смак і якість</h3>
                  <p>
                    Лише відібрані кавові зерна та товари від перевірених
                    виробників.
                  </p>
                </article>
              </li>
              <li>
                {" "}
                <article>
                  <img src="" alt="" />
                  <h3>Усе для кавового ритуалу</h3>
                  <p>
                    Від турки до кавомолки — ми зібрали повний набір для
                    ідеальної чашки.
                  </p>
                </article>
              </li>
              <li>
                {" "}
                <article>
                  <img src="" alt="" />
                  <h3>Натхнення щодня</h3>
                  <p>
                    Кава, яка підкреслить твій настрій та стане головною
                    частиною ранкової звички.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h2>Популярні категорії</h2>
            <button>
              {" "}
              <img src={categorieArrow} alt="стрілочка для перелистування" />
            </button>
            <CategoriesList/>
            <button>
              <img src={categorieArrow} alt="стрілочка для перелистування" />
            </button>
            <ul>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
              <li>
                <button></button>
              </li>
            </ul>
          </div>
        </section>
        <Rewiews />
      </main>
      <Footer />
    </>
  );
}
