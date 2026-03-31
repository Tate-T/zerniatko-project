import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./ProductsPage.module.css";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className={style.catalog}>
        <Container>
          <h1 className={style.catalog__title}>Всі товари</h1>
          <div className={style.catalog__layout}>
            <aside className={style.filters}>
              
              {/* Секція Категорій */}
              <div className={style.filter_group}>
                <div className={style.filter_header}>
                  <h3>Фільтри</h3>
                  <button className={style.clear_btn}>Очистити всі</button>
                </div>
                <p className={style.count_info}>Показано 5 з 100</p>
                
                <div className={style.mobile_accordion}>
                  <div className={style.accordion_trigger}>
                    <span>Усі</span>
                    <span className={style.arrow}>▼</span>
                  </div>
                  <nav className={style.category_nav}>
                    <button className={`${style.cat_button} ${style.active_cat}`}>Усі</button>
                    <button className={style.cat_button}>Кава у зернах</button>
                    <button className={style.cat_button}>Мелена кава</button>
                    <button className={style.cat_button}>Кавоварки та аксесуари</button>
                    <button className={style.cat_button}>Гаджети для бариста</button>
                    <button className={style.cat_button}>Чашки та термоси</button>
                    <button className={style.cat_button}>Фільтри та витратні матеріали</button>
                    <button className={style.cat_button}>Капсульна кава</button>
                    <button className={style.cat_button}>Розчинна кава</button>
                    <button className={style.cat_button}>Сиропи та добавки</button>
                    <button className={style.cat_button}>Подарункові набори</button>
                    <button className={style.cat_button}>Зберігання кави</button>
                    <button className={style.cat_button}>Печиво та солодощі до кави</button>
                  </nav>
                </div>
              </div>

              {/* Секція Брендів */}
              <div className={`${style.filter_group} ${style.desktop_only_filter}`}>
                <div className={style.filter_header}>
                  <h3>Бренд/Виробник</h3>
                  <button className={style.clear_btn}>Очистити</button>
                </div>
                <div className={style.brand_list}>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Lavazza</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Illy</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Bialetti</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Hario</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Timemore</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Svit Kavy</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Foundation Coffee Roasters</span>
                  </label>
                  <label className={style.brand_item}>
                    <input type="checkbox" readOnly />
                    <span className={style.checkmark}></span>
                    <span>Rocket Espresso</span>
                  </label>
                </div>
              </div>

              {/* Секція Ціни */}
              <div className={`${style.filter_group} ${style.desktop_only_filter}`}>
                <div className={style.filter_header}>
                  <h3>Ціна</h3>
                  <button className={style.clear_btn}>Очистити</button>
                </div>
                <div className={style.price_slider_container}>
                  <Slider range min={0} max={5000} defaultValue={[0, 5000]} />
                  <div className={style.price_labels}>
                    <span>0</span>
                    <span>5000</span>
                  </div>
                </div>
              </div>
            </aside>

            <section className={style.products_grid}>
             
              <ProductsList products={[
                { id: 1, name: "Еспресо Класік", category: "Кава у зернах", brand: "Lavazza", price: 280 },
                { id: 2, name: "Ефіопія Сідамо", category: "Кава у зернах", brand: "Svit Kavy", price: 340 }
              ]} />
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}