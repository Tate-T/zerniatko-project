import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./ProductsPage.module.css";

const PRODUCTS_DATA = [
  { id: 1, name: "Lavazza Oro", category: "Кава в зернах", brand: "Lavazza", price: 450 },
  { id: 2, name: "Illy Espresso", category: "Мелена кава", brand: "Illy", price: 380 },
  { id: 3, name: "Bialetti Moka", category: "Кавоварки та аксесуари", brand: "Bialetti", price: 1200 },
  { id: 4, name: "Hario V60", category: "Гаджети для бариста", brand: "Hario", price: 650 },
  { id: 5, name: "Lavazza Dek", category: "Кава в зернах", brand: "Lavazza", price: 420 },
  { id: 6, name: "Timemore Nano", category: "Гаджети для бариста", brand: "Timemore", price: 3500 },
];

const CATEGORIES = [
  "Усі", "Кава в зернах", "Мелена кава", "Кавоварки та аксесуари", 
  "Гаджети для бариста", "Чашки та термоси", "Фільтри та витратні матеріали"
];

const BRANDS = ["Lavazza", "Illy", "Bialetti", "Hario", "Timemore"];

export default function ProductsPage() {
  // 2. Стан для фільтрів
  const [activeCategory, setActiveCategory] = useState("Усі");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceLimit, setPriceLimit] = useState(5000);

  // 3. Логіка фільтрації (обчислюється при зміні стану)
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchCategory = activeCategory === "Усі" || product.category === activeCategory;
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchPrice = product.price <= priceLimit;
      return matchCategory && matchBrand && matchPrice;
    });
  }, [activeCategory, selectedBrands, priceLimit]);

  // 4. Функції керування
  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setActiveCategory("Усі");
    setSelectedBrands([]);
    setPriceLimit(5000);
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
                
                {/* CATEGORIES */}
                <div className={style.filter_group}>
                  <div className={style.filter_group__header}>
                    <h3 className={style.filter_group__title}>Фільтри</h3>
                    <button className={style.filter_group__clear} onClick={clearAllFilters}>
                      Очистити всі
                    </button>
                  </div>

                  <span className={style.filter_group__count}>
                    Показано {filteredProducts.length} з {PRODUCTS_DATA.length}
                  </span>

                  <ul className={style.category_list}>
                    {CATEGORIES.map(cat => (
                      <li 
                        key={cat} 
                        className={`${style.category_list__item} ${activeCategory === cat ? style.is_active : ""}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BRANDS */}
                <div className={style.filter_group}>
                  <div className={style.filter_group__header}>
                    <h3 className={style.filter_group__title}>Бренд</h3>
                  </div>

                  <ul className={style.brand_list}>
                    {BRANDS.map(brand => (
                      <li 
                        key={brand} 
                        className={style.brand_list__item} 
                        onClick={() => toggleBrand(brand)}
                      >
                        <div className={`${style.brand_list__checkbox} ${selectedBrands.includes(brand) ? style.checked : ""}`}>
                          {selectedBrands.includes(brand) && "✓"}
                        </div>
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRICE */}
                <div className={style.filter_group}>
                  <h3 className={style.filter_group__title}>Ціна до: {priceLimit} грн</h3>
                  <div className={style.price_range}>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="50"
                      value={priceLimit}
                      onChange={(e) => setPriceLimit(Number(e.target.value))}
                      className={style.price_range__input}
                    />
                    <div className={style.price_range__values}>
                      <span>0</span>
                      <span className={style.price_current}>{priceLimit}</span>
                      <span>5000</span>
                    </div>
                  </div>
                </div>
              </aside>

              <section className={style.catalog__products}>
                {/* Передаємо відфільтровані товари в ProductsList */}
                <ProductsList products={filteredProducts} />
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}