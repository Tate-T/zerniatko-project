import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./ProductsPage.module.css";

const PRODUCTS_DATA = [
  { id: 1, name: "Lavazza Oro", category: "Кава у зернах", brand: "Lavazza", price: 450 },
  { id: 2, name: "Illy Espresso", category: "Мелена кава", brand: "Illy", price: 380 },
  { id: 3, name: "Bialetti Moka", category: "Кавоварки та аксесуари", brand: "Bialetti", price: 1200 },
  { id: 4, name: "Hario V60", category: "Гаджети для бариста", brand: "Hario", price: 650 },
  { id: 5, name: "Lavazza Dek", category: "Кава у зернах", brand: "Lavazza", price: 420 },
];

const CATEGORIES = [
  "Усі", "Кава у зернах", "Мелена кава", "Кавоварки та аксесуари", 
  "Гаджети для бариста", "Чашки та термоси", "Фільтри та витратні матеріали",
  "Капсульна кава", "Розчинна кава", "Сиропи та добавки", "Подарункові набори", 
  "Зберігання кави", "Печиво та солодощі до кави"
];

const BRANDS = ["Lavazza", "Illy", "Bialetti", "Hario", "Timemore", "Svit Kavy", "Foundation Coffee Roasters", "Rocket Espresso"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Кава у зернах");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceLimit, setPriceLimit] = useState(5000);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      return (activeCategory === "Усі" || p.category === activeCategory) &&
             (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
             (p.price <= priceLimit);
    });
  }, [activeCategory, selectedBrands, priceLimit]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <>
      <Header />
      <main className={style.catalog}>
        <Container>
          <h1 className={style.catalog__title}>{activeCategory}</h1>
          
          <div className={style.catalog__layout}>
            <aside className={style.filters}>
              
              {/* Секція Категорій */}
              <div className={style.filter_group}>
                <div className={style.filter_header}>
                  <h3>Фільтри</h3>
                  <button onClick={() => {setActiveCategory("Усі"); setSelectedBrands([]); setPriceLimit(5000);}}>
                    Очистити всі
                  </button>
                </div>
                <p className={style.count_info}>Показано {filteredProducts.length} з 100</p>
                <nav className={style.category_nav}>
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat} 
                      className={activeCategory === cat ? style.active_cat : ""}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Секція Брендів */}
              <div className={style.filter_group}>
                <div className={style.filter_header}>
                  <h3>Бренд/Виробник</h3>
                  <button onClick={() => setSelectedBrands([])}>Очистити</button>
                </div>
                <div className={style.brand_list}>
                  {BRANDS.map(brand => (
                    <label key={brand} className={style.brand_item}>
                      <input 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)} 
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Секція Ціни */}
              <div className={style.filter_group}>
                <div className={style.filter_header}>
                  <h3>Ціна</h3>
                  <button onClick={() => setPriceLimit(5000)}>Очистити</button>
                </div>
                <input 
                  type="range" 
                  min="0" max="5000" 
                  value={priceLimit} 
                  onChange={(e) => setPriceLimit(e.target.value)}
                />
                <div className={style.price_labels}>
                  <span>0</span>
                  <span>5000</span>
                </div>
              </div>
            </aside>

            <section className={style.products_grid}>
              <ProductsList products={filteredProducts} />
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}