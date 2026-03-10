import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./ProductsPage.module.css";

export default function ProductsPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(5000);

  const categories = [
    "Усі", "Кава в зернах", "Мелена кава", "Кавоварки та аксесуари", 
    "Гаджети для бариста", "Чашки та термоси", "Фільтри та витратні матеріали", 
    "Капсульна кава", "Розчинна кава", "Сиропи та добавки", 
    "Подарункові набори", "Зберігання кави", "Печиво та солодощі до кави"
  ];

  const brands = [
    "Lavazza", "Illy", "Bialetti", "Hario", "Timemore", 
    "Svit Kavy", "Foundation Coffee Roasters", "Rocket Espresso"
  ];

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <>
      <Header />
      <main className={style.catalog}>
        <section className={style.catalog__section}>
          <Container>
            <h1 className={style.catalog__title}>Всі товари</h1>
            
            <div className={style.catalog__layout}>
              <aside className={style.filters}>
                
                <div className={style.filter_group}>
                  <div className={style.filter_group__header}>
                    <h3 className={style.filter_group__title}>Фільтри</h3>
                    <button className={style.filter_group__clear} onClick={() => {setSelectedBrands([]); setPrice(5000);}}>
                      Очистити всі
                    </button>
                  </div>
                  <span className={style.filter_group__count}>Показано 15 з 100</span>
                  
                  <div className={style.mobile_select} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span>Фільтри</span>
                  </div>

                  <ul className={`${style.category_list} ${isDropdownOpen ? style.is_open : ""}`}>
                    {categories.map((cat) => (
                      <li 
                        key={cat} 
                        className={`${style.category_list__item} ${cat === "Кава в зернах" ? style.is_active : ""}`}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={style.filter_group}>
                  <div className={style.filter_group__header}>
                    <h3 className={style.filter_group__title}>Бренд/Виробник</h3>
                    <button className={style.filter_group__clear} onClick={() => setSelectedBrands([])}>
                      Очистити
                    </button>
                  </div>
                  <ul className={style.brand_list}>
                    {brands.map(brand => (
                      <li key={brand} className={style.brand_list__item} onClick={() => toggleBrand(brand)}>
                        <div className={`${style.brand_list__checkbox} ${selectedBrands.includes(brand) ? style.is_checked : ""}`}>
                          {selectedBrands.includes(brand) && <span className={style.checkmark}>✓</span>}
                        </div>
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={style.filter_group}>
                  <div className={style.filter_group__header}>
                    <h3 className={style.filter_group__title}>Ціна</h3>
                    <button className={style.filter_group__clear} onClick={() => setPrice(5000)}>
                      Очистити
                    </button>
                  </div>
                  <div className={style.price_range}>
                    <input 
                      type="range" min="0" max="5000" step="50"
                      value={price} 
                      onChange={(e) => setPrice(e.target.value)}
                      className={style.price_range__input}
                    />
                    <div className={style.price_range__track_bg}>
                      <div className={style.price_range__track_fill} style={{ width: `${(price / 5000) * 100}%` }}></div>
                      <div className={style.price_range__thumb} style={{ left: `${(price / 5000) * 100}%` }}></div>
                    </div>
                    <div className={style.price_range__values}>
                      <span>0</span>
                      <span className={style.price_current}>{price}</span>
                      <span>5000</span>
                    </div>
                  </div>
                </div>
              </aside>

              <section className={style.catalog__products}>
                <ProductsList />
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}