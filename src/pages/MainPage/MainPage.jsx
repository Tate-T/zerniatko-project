import Header from "../../components/Header/Header";
import Rewiews from "../../components/Rewiews/Reviews";
import ProductsList from "../../components/ProductsList/ProductsList";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Container } from "../../components/Container/ContainerLayout.jsx";

import heroImage from "../../assets/hero.png";
import categorieArrow from "../../images/arrow.png";

import heroStyles from "./HeroSection.module.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <section className={heroStyles.hero}>
          <Container>
            <div className={heroStyles.hero__inner}>
              <div className={heroStyles.hero__content}>
                <h1 className={heroStyles.hero__title}>
                  Зернятко — твій шлях до справжньої кави
                </h1>
                <p className={heroStyles.hero__description}>
                  Ми створили місце, де кожен знайде все для свого кавового
                  ритуалу: від зерен преміум-якості до стильних аксесуарів для
                  приготування. Почни день із натхненням та обирай товари, що
                  розкривають унікальний смак твоєї кави.
                </p>
                <ul className={heroStyles.hero__links}>
                  <li>
                    <a href="#" className={heroStyles.hero__link}>
                      До товарів
                    </a>
                  </li>
                  <li>
                    <a href="#" className={heroStyles.hero__linkOutline}>
                      Дослідити категорії
                    </a>
                  </li>
                </ul>
              </div>
              <div className={heroStyles.hero__imageWrapper}>
                <img
                  src={heroImage}
                  alt="coffee"
                  className={heroStyles.hero__image}
                />
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <h2>Популярні товари</h2>
            <a href="#">Всі товари</a>
            <ProductsList />
          </Container>
        </section>
        <section>
          <Container>
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
          </Container>
        </section>
        <section>
          <Container>
            <h2>Популярні категорії</h2>
            <button>
              {" "}
              <img src={categorieArrow} alt="стрілочка для перелистування" />
            </button>
            <CategoriesList />
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
          </Container>
        </section>
        <Rewiews />
      </main>
      <Footer />
    </>
  );
}
