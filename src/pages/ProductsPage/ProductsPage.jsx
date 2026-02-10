import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <aside>
              <ul>
                <li>
                  <div>
                    <h3>Фільтри</h3>
                    <button>Очистити всі</button>
                    <span>Показано 15 з 100</span>
                  </div>
                  <ul>
                    <li>Усі</li>
                    <li>Кава в зернах</li>
                    <li>Мелена кава</li>
                    <li>Кавоварки та аксесуари</li>
                    <li>Гаджети для бариста</li>
                    <li>Чашки та термоси</li>
                    <li>Фільтри та витратні матеріали</li>
                    <li>Капсульна кава</li>
                    <li>Розчинна кава</li>
                    <li>Сиропи та добавки</li>
                    <li>Подарункові набори</li>
                    <li>Зберігання кави</li>
                    <li>Печиво та солодощі до кави</li>
                  </ul>
                </li>
                <li>
                  <div>
                    <h3>Бренд/Виробник</h3>
                    <button>Очистити</button>
                  </div>
                  <ul>
                    <li>Lavazza</li>
                    <li>Illy</li>
                    <li>Bialetti</li>
                    <li>Bialetti</li>
                    <li>Hario</li>
                    <li>Timemore</li>
                    <li>Svit Kavy</li>
                    <li>Foundation Coffee Roasters</li>
                    <li>Rocket Espresso</li>
                  </ul>
                </li>
                <li>
                  <div>
                    <h3>Ціна</h3>
                    <button>Очистити</button>
                  </div>
                  <form>
                    <label>
                      <input type="range" min="0" max="5000" />
                    </label>
                  </form>
                </li>
              </ul>
            </aside>
            <ProductsList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
