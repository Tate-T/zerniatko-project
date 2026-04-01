import { Component } from "react";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import PopularCategories from "../../components/PopularCategories/PopularCategories.jsx";
import { Rewiews } from "../../components/Reviews/Reviews.jsx";
import Footer from "../../components/Footer/Footer";

import heroImage from "../../assets/hero.png";
import product1 from "../../images/products-items/product-item-1.png";
import product2 from "../../images/products-items/product-item-2.png";
import product3 from "../../images/products-items/product-item-3.png";
import product4 from "../../images/products-items/product-item-4.png";
import product5 from "../../images/products-items/product-item-5.png";
import product6 from "../../images/products-items/product-item-6.png";
import product7 from "../../images/products-items/product-item-7.png";
import product8 from "../../images/products-items/product-item-8.png";
import categorieArrow from "../../images/arrow.png";

import { FiSun } from "react-icons/fi";
import { MdOutlineCoffee } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";

import heroStyles from "./HeroSection.module.css";
import popularStyles from "./PopularProducts.module.css";
import advantagesStyles from "./Advantages.module.css";

export default class MainPage extends Component {
  state = {
    startIndex: 0,
  };

  products = [
    {
      id: 1,
      name: "Еспресо Класік",
      description:
        "Суміш арабіки та робусти з насиченим смаком і нотами темного шоколаду.",
      price: 280,
      image: product1,
    },
    {
      id: 2,
      name: "Ефіопія Сідамо",
      description:
        "100% арабіка з фруктово-ягідними відтінками та легкою кислинкою.",
      price: 340,
      image: product2,
    },
    {
      id: 3,
      name: "Колумбія Супремо",
      description:
        "Арабіка з м’яким карамельним післясмаком та горіховими нотами.",
      price: 310,
      image: product3,
    },
    {
      id: 4,
      name: "Безкофеїнова Арабіка",
      description:
        "Легка кава без кофеїну, зберігає аромат і смак справжньої арабіки.",
      price: 290,
      image: product4,
    },
    {
      id: 5,
      name: "Термочашка Зернятко 350 мл",
      description: "Стильна багаторазова чашка для кави на ходу.",
      price: 420,
      image: product5,
    },
    {
      id: 6,
      name: "Набір фільтрів для V60 (100 шт.)",
      description:
        "Паперові фільтри для пуроверу, зберігають чистий смак кави.",
      price: 190,
      image: product6,
    },
    {
      id: 7,
      name: "Френч-прес Classic 600 мл",
      description:
        "Скляний френч-прес із металевим фільтром для ароматної кави вдома.",
      price: 450,
      image: product7,
    },
    {
      id: 8,
      name: "Турка мідна з ручкою",
      description:
        "Традиційна джезва для приготування насиченої кави по-східному.",
      price: 520,
      image: product8,
    },
  ];

  nextProduct = () => {
    if (this.state.startIndex < this.products.length - 4) {
      this.setState((previous) => ({ startIndex: previous.startIndex + 1 }));
    }
  };

  previousProduct = () => {
    if (this.state.startIndex > 0) {
      this.setState((previous) => ({ startIndex: previous.startIndex - 1 }));
    }
  };

  goToSlide = (index) => {
    this.setState({ startIndex: index * 4 });
  };

  render() {
    const { startIndex } = this.state;
    const visibleProducts = this.products.slice(startIndex, startIndex + 4);

    const dotsCount = Math.ceil(this.products.length / 4);

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
                <h2 className={popularStyles.popular__title}>
                  Популярні товари
                </h2>
                <a href="#" className={popularStyles.popular__link}>
                  Всі товари
                </a>
              </div>
              <div className={popularStyles.popular__slider}>
                <button
                  className={popularStyles.popular__btn}
                  onClick={this.previousProduct}
                  disabled={startIndex === 0}
                >
                  <img
                    src={categorieArrow}
                    alt="стрілка"
                    className={popularStyles.popular__btnIcon}
                  />
                </button>

                <ProductsList products={visibleProducts} />

                <button
                  className={`${popularStyles.popular__btn} ${popularStyles.popular__btnRight}`}
                  onClick={this.nextProduct}
                  disabled={startIndex >= this.products.length - 4}
                >
                  <img
                    src={categorieArrow}
                    alt="стрілка"
                    className={popularStyles.popular__btnIcon}
                  />
                </button>

                <ul className={popularStyles.popular__dots}>
                  {Array.from({ length: dotsCount }).map((_, index) => (
                    <li key={index}>
                      <button
                        className={`${popularStyles.popular__dot} ${startIndex / 4 === index ? popularStyles.popular__dotActive : ""}`}
                        onClick={() => this.goToSlide(index)}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>

          <section className={advantagesStyles.why}>
            <Container>
              <h2 className={advantagesStyles.why__title}>
                Чому варто обрати Зернятко?
              </h2>
              <ul className={advantagesStyles.why__list}>
                <li className={advantagesStyles.why__item}>
                  <article>
                    <FiSun className={advantagesStyles.why__icon} />
                    <h3 className={advantagesStyles.why__itemTitle}>
                      Смак і якість
                    </h3>
                    <p className={advantagesStyles.why__itemText}>
                      Лише відібрані кавові зерна та товари від перевірених
                      виробників.
                    </p>
                  </article>
                </li>
                <li className={advantagesStyles.why__item}>
                  <article>
                    <MdOutlineCoffee className={advantagesStyles.why__icon} />
                    <h3 className={advantagesStyles.why__itemTitle}>
                      Усе для кавового ритуалу
                    </h3>
                    <p className={advantagesStyles.why__itemText}>
                      Від турки до кавомолки — ми зібрали повний набір для
                      ідеальної чашки.
                    </p>
                  </article>
                </li>
                <li className={advantagesStyles.why__item}>
                  <article>
                    <MdOutlineCalendarToday
                      className={advantagesStyles.why__icon}
                    />
                    <h3 className={advantagesStyles.why__itemTitle}>
                      Натхнення щодня
                    </h3>
                    <p className={advantagesStyles.why__itemText}>
                      Кава, яка підкреслить твій настрій та стане головною
                      частиною ранкової звички.
                    </p>
                  </article>
                </li>
              </ul>
            </Container>
          </section>

          <PopularCategories />

          <Rewiews />
        </main>

        <Footer />
      </>
    );
  }
}
