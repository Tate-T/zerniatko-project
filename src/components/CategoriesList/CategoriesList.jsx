import categorieCoffee from "../../images/categorie-coffee.png";
import categorieFilters from "../../images/categorie-filters.png";
import categorieCoffeeMachines from "../../images/categorie-сoffee-machines.png";

export default function CategoriesList() {
    return <ul>
        <li>
            <img src={categorieCoffee} alt="кава" />
            <h4>Кава в зернах</h4>
            <p>
                Арабіка, робуста, бленди та моносорти для різних способів
                приготування.
            </p>
        </li>
        <li>
            <img src={categorieCoffeeMachines} alt="Кавоварки" />
            <h4>Кавоварки та аксесуари</h4>
            <p>Френч-преси, турки, мока-поти, пуровер-приладдя.</p>
        </li>
        <li>
            <img src={categorieFilters} alt="Фільтр та коробка" />
            <h4>Фільтри та витратні матеріали</h4>
            <p>
                Паперові фільтри, серветки, допоміжні дрібниці для
                приготування кави.
            </p>
        </li>
    </ul>
}