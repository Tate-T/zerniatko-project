import logo from "../../assets/logo.svg";
import button from "../../assets/button.svg";
import style from "./Header.module.css";
import { Container } from "../Container/ContainerLayout.jsx";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <nav className={style.header__navigation}>
          <a href="#" className={style.header__logo}>
            <img className={style.header__icon} src={logo} alt="Logo" />
          </a>
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <a className={style.header__link} href="#">
                Головна
              </a>
            </li>
            <li className={style.header__item}>
              <a className={style.header__link} href="#">
                Товари
              </a>
            </li>
            <li className={style.header__item}>
              <a className={style.header__link} href="#">
                Категорії
              </a>
            </li>
          </ul>
          <ul>
            <li className={style.header__item}>
              <a className={style.header__link} href="#">
                Вхід
              </a>
            </li>
            <li className={style.header__item}>
              <a className={style.header__link} href="#">
                Реєстрація
              </a>
            </li>
          </ul>
        </nav>
        <button className={style.header__button}>
          <img className={style.header__basket} src={button} alt="корзина" />
        </button>
      </Container>
    </header>
  );
}
