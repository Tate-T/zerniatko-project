import style from "./SignHeader.module.css";
import logo from "../../assets/logo.svg";

export default function SignHeader() {
  return (
    <header className={style.header}>
      <a href="#">
        <img className={style.header__icon} src={logo} alt="Logo" />
      </a>
    </header>
  );
}
