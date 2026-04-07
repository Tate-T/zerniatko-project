import style from "./LoginMenu.module.css";
import { Component } from "react";
import users from "../../../data/users.json";

export class LoginMenu extends Component {
  user = {}
  state = {
    phone: "",
    password: ""
  };

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value
    });
  };

  passChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.phone.includes("+380") && this.state.phone.length === 13 && this.state.password.length >= 8) {
      if (users.find(u => u.phone === this.state.phone) && users.find(u => u.password === this.state.password)) {
        this.user = {...this.state};
        this.setState({
          phone: "",
          password: "",
        });
        alert("Успішно!");
        console.log("Успішно!");
      } else {
        alert("Такого користувача не існує або дані вказані невірно.");
      }
    } else {
      alert("Помилка. Невiрний формат даних.");
    };
  }

  render() {
    return (
      <main className={style.main_container}>
        <div className={style.container}>
          <div className={style.form_container}>
            <ul className={style.choose_sign}>
              <li><button>Реєстрація</button></li>
              <li><button style={{borderBottom: "1px solid gray"}}>Вхід</button></li>
            </ul>
            <form className={style.sign_form} onSubmit={this.onSubmit}>
              <h2>Вхід</h2>
              <div>
                <p>Номер телефону*</p>
                <input placeholder="+38 (0__) ___-__-__" type="tel" onChange={this.phoneChange} value={this.state.phone}></input>
              </div>
              <div>
                <p>Пароль*</p>
                <input placeholder="********" type="password" onChange={this.passChange} value={this.state.password}></input>
              </div>
              <button className={style.submit_button} type="submit">Увійти</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}
