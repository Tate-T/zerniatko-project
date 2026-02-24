import categorieCoffee from "../../images/categorie-coffee.png";
import categorieFilters from "../../images/categorie-filters.png";
import categorieCoffeeMachines from "../../images/categorie-сoffee-machines.png";
import style from "./CategoriesList.module.css"

export default function CategoriesList() {
   return <ul className={style.categorie__list}>
       <li className={style.categorie__item} >
           <img className={style.categorie__icon} src={categorieCoffee} alt="кава" />
           <h4 className={style.categorie__title}>Кава в зернах</h4>
           <p className={style.categorie__text}>
               Арабіка, робуста, бленди та моносорти для різних способів
               приготування.
           </p>
       </li>
       <li className={style.categorie__item} >
           <img  className={style.categorie__icon} src={categorieCoffeeMachines} alt="Кавоварки" />
           <h4  className={style.categorie__title}>Кавоварки та аксесуари</h4>
           <p className={style.categorie__text}>Френч-преси, турки, мока-поти, пуровер-приладдя.</p>
       </li>
       <li className={style.categorie__item}>
           <img  className={style.categorie__icon} src={categorieFilters} alt="Фільтр та коробка" />
           <h4  className={style.categorie__title}>Фільтри та витратні матеріали</h4>
           <p className={style.categorie__text}>
               Паперові фільтри, серветки, допоміжні дрібниці для
               приготування кави.
           </p>
       </li>
   </ul>
}
