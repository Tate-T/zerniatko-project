import logo from "../../assets/logo.svg";
import { Container } from "../Container/ContainerLayout.jsx";
export default function Footer() {
  return (
    <Container>
      <div className="container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="">
          <h3>Меню</h3>
          <ul>
            <li>Головна</li>
            <li>Товари</li>
            <li>Категорії</li>
          </ul>
        </div>
        <div className="">
          <h3>Підписатися</h3>
          <p>
            Приєднуйтесь до нашої розсилки, щоб бути в курсі новин та акцій.
          </p>
          <form>
            <label>
              <input type="text" placeholder="Введіть ваш email" />
            </label>
            <button type="submit">Підписатися</button>
          </form>
        </div>
        <div className="">
          <h3>© 2025 Зернятко. Всі права захищені.</h3>
          <ul>
            <li>
              <a href="#">f</a>
            </li>
            <li>
              <a href="#">i</a>
            </li>
            <li>
              <a href="#">x</a>
            </li>
            <li>
              <a href="#">y</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
