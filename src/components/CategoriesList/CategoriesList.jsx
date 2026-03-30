import style from "./CategoriesList.module.css";

import categorieCoffee from "../../images/categorie-coffee.png";
import categorieFilters from "../../images/categorie-filters.png";
import categorieCoffeeMachines from "../../images/categorie-сoffee-machines.png";
import CupsAndThermoses from "../../images/categorie-cups-and-thermoses.png"
import baristaGadgets from "../../images/categorie-barista-gadgets.png"
import groundCoffe from "../../images/categorie-ground-coffee.png"

const categoriesData = [
  { id: 1, title: "Кава в зернах", text: "Арабіка, робуста, бленди та моносорти.", img: categorieCoffee },
  { id: 2, title: "Кавоварки та аксесуари", text: "Френч-преси, турки, мока-поти.", img: categorieCoffeeMachines },
  { id: 3, title: "Фільтри та витратні матеріали", text: "Паперові фільтри та допоміжні дрібниці.", img: categorieFilters },
    // { id: 4, title: "Мелена кава", text: "Свіжозмелена кава ідеального помолу.", img: groundCoffe },
    // { id: 5, title: "Гаджети для бариста", text: "Тампери, пітчери, ваги та термометри.", img: baristaGadgets },
    // { id: 6, title: "Чашки та термоси", text: "Стильний посуд для вашого напою.", img: CupsAndThermoses },
    // { id: 7, title: "Капсульна кава", text: "Зручність та швидкість приготування.", img: categorieCoffee },
    // { id: 8, title: "Розчинна кава", text: "Якісна кава швидкого приготування.", img: categorieFilters },
    // { id: 9, title: "Сиропи та добавки", text: "Смакові акценти для вашої кави.", img: categorieCoffee },
    // { id: 10, title: "Подарункові набори", text: "Найкращий презент для кавомана.", img: categorieCoffeeMachines },
    // { id: 11, title: "Зберігання кави", text: "Герметичні банки та контейнери.", img: categorieFilters },
    // { id: 12, title: "Печиво та солодощі", text: "Смачне доповнення до філіжанки кави.", img: categorieCoffee }
    ,];


export default function CategoriesList({ limit }) {
  const visibleCategories = categoriesData.slice(0, limit);

  return (
    <ul className={style.categorie__list}>
      {visibleCategories.map((item) => (
        <li key={item.id} className={style.categorie__item}>
          <img className={style.categorie__icon} src={item.img} alt={item.title} />
          <h4 className={style.categorie__title}>{item.title}</h4>
          <p className={style.categorie__text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}