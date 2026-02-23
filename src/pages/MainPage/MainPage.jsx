import Header from "../../components/Header/Header";
import Rewiews from "../../components/Rewiews/Reviews";
import ProductsList from "../../components/ProductsList/ProductsList";
import Footer from "../../components/Footer/Footer";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { Container } from "../../components/Container/ContainerLayout.jsx";

import heroImage from "../../assets/hero.png";
import categorieArrow from "../../images/arrow.png";

import heroStyles from "./HeroSection.module.css";
import popularStyles from "./PopularProducts.module.css";

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
        <section className={popularStyles.popular}>
          <Container>
            <div className={popularStyles.popular__header}>
              <h2 className={popularStyles.popular__title}>Популярні товари</h2>
              <a href="#" className={popularStyles.popular__link}>
                Всі товари
              </a>
            </div>
            <div className={popularStyles.popular__slider}>
              <button className={popularStyles.popular__btn}>
                <img
                  src={categorieArrow}
                  alt="стрілка"
                  className={popularStyles.popular__btnIcon}
                />
              </button>
              <ProductsList />
              <button
                className={`${popularStyles.popular__btn} ${popularStyles.popular__btnRight}`}
              >
                <img
                  src={categorieArrow}
                  alt="стрілка"
                  className={popularStyles.popular__btnIcon}
                />
              </button>
              <ul className={popularStyles.popular__dots}>
                <li>
                  <button className={popularStyles.popular__dot}></button>
                </li>
                <li>
                  <button className={popularStyles.popular__dot}></button>
                </li>
                <li>
                  <button
                    className={`${popularStyles.popular__dot} ${popularStyles.popular__dotActive}`}
                  ></button>
                </li>
                <li>
                  <button className={popularStyles.popular__dot}></button>
                </li>
                <li>
                  <button className={popularStyles.popular__dot}></button>
                </li>
              </ul>
            </div>
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
