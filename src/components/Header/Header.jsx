import logo from "../../assets/logo.svg";
import button from "../../assets/button.svg";

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Товари</a>
            </li>
            <li>
              <a href="#">Категорії</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Вхід</a>
            </li>
            <li>
              <a href="#">Реєстрація</a>
            </li>
          </ul>
        </nav>
        <button>
          <img src={button} alt="корзина" />
        </button>
      </div>
    </header>
  );
}
