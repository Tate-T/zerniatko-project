import React, { useState, useMemo } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Container } from "../../components/Container/ContainerLayout.jsx";
import style from "./ProductsPage.module.css";

const PRODUCTS_DATA = [
  { id: 1, name: "Еспресо Класік", category: "Кава в зернах", brand: "Lavazza", price: 280 },
  { id: 2, name: "Ефіопія Сідамо", category: "Кава в зернах", brand: "Svit Kavy", price: 340 },
  { id: 3, name: "Колумбія Супремо", category: "Кава в зернах", brand: "Foundation Coffee Roasters", price: 310 },
  { id: 4, name: "Термочашка Зернятко", category: "Чашки та термоси", brand: "Hario", price: 420 },
  { id: 5, name: "Набір фільтрів V60", category: "Фільтри та витратні матеріали", brand: "Hario", price: 190 },
];

const CATEGORIES = [
  "Усі", "Кава в зернах", "Мелена кава", "Кавоварки та аксесуари", 
  "Гаджети для бариста", "Чашки та термоси", "Фільтри та витратні матеріали",
  "Капсульна кава", "Розчинна кава", "Сиропи та добавки", 
  "Подарункові набори", "Зберігання кави", "Печиво та солодощі до кави"
];

const BRANDS = ["Lavazza", "Illy", "Bialetti", "Hario", "Timemore", "Svit Kavy", "Foundation Coffee Roasters"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Усі");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [isOpen, setIsOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchCat = activeCategory === "Усі" || p.category === activeCategory;
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchCat && matchBrand && matchPrice;
    });
  }, [activeCategory, selectedBrands, priceRange]);

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  const sliderStyles = {
    rail: { backgroundColor: 'rgba(0, 0, 0, 0.1)', height: 2 },
    track: [{ backgroundColor: '#000000', height: 2 }],
    handle: [
      { backgroundColor: '#ffffff', borderColor: '#000000', width: 14, height: 14, marginTop: -6, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', opacity: 1 },
      { backgroundColor: '#ffffff', borderColor: '#000000', width: 14, height: 14, marginTop: -6, boxShadow: '0 2px 4px rgba(0,0,0,0.2)', opacity: 1 }
    ]
  };

  return (
    <>
      <Header />
      <main className={style.catalog}>
        <Container>
          <h1 className={style.catalog__title}>Всі товари</h1>
          <div className={style.catalog__layout}>
            <aside className={style.filters}>
              
              <div className={style.filter_section}>
                <div className={style.filter_header}>
                  <h3>Фільтри</h3>
                  <button className={style.clear_btn} onClick={() => {setActiveCategory("Усі"); setSelectedBrands([]); setPriceRange([0, 5000]);}}>Очистити всі</button>
                </div>
                <p className={style.count_info}>Показано {filteredProducts.length} з 100</p>
                
                <div className={style.mobile_accordion}>
                  <div className={`${style.accordion_trigger} ${isOpen ? style.trigger_active : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span>{activeCategory}</span>
                    <span>{isOpen ? "▲" : "▼"}</span>
                  </div>
                  <nav className={`${style.category_nav} ${isOpen ? style.is_open : ""}`}>
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat} 
                        className={`${style.cat_button} ${activeCategory === cat ? style.active_cat : ""}`}
                        onClick={() => {setActiveCategory(cat); setIsOpen(false);}}
                      >
                        {cat}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              <div className={style.desktop_filters}>
                <div className={style.filter_section}>
                  <div className={style.filter_header}>
                    <h3>Бренд</h3>
                    <button className={style.clear_btn} onClick={() => setSelectedBrands([])}>Очистити</button>
                  </div>
                  <div className={style.brand_list}>
                    {BRANDS.map(brand => (
                      <label key={brand} className={style.brand_item}>
                        <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} />
                        <span className={style.checkmark}></span>
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={style.filter_section}>
                  <div className={style.filter_header}>
                    <h3>Ціна</h3>
                    <button className={style.clear_btn} onClick={() => setPriceRange([0, 5000])}>Очистити</button>
                  </div>
                  <div className={style.price_slider_container}>
                    <Slider range min={0} max={5000} value={priceRange} onChange={setPriceRange} railStyle={sliderStyles.rail} trackStyle={sliderStyles.track} handleStyle={sliderStyles.handle} />
                    <div className={style.price_labels}>
                      <span>{priceRange[0]}</span>
                      <span>{priceRange[1]}</span>
                    </div>
                  </div>
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