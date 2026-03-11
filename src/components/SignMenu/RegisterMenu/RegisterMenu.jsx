import style from "./RegisterMenu.module.css";

export default function RegisterMenu() {
  return (
    <main className={style.main_container}>
      <div className={style.container}>
        <div className={style.form_container}>
          <ul className={style.choose_sign}>
            <li><button>Реєстрація</button></li>
            <li><button>Вхід</button></li>
          </ul>
          <form className={style.sign_form}>
            <h2>Реєстрація</h2>
            <div>
              <p>Імʼя*</p>
              <input placeholder="Ваше ім’я" type="text"></input>
            </div>
            <div>
              <p>Номер телефону*</p>
              <input placeholder="+38 (0__) ___-__-__" type="tel"></input>
            </div>
            <div>
              <p>Пароль*</p>
              <input placeholder="********" type="password"></input>
            </div>
            <button className={style.submit_button} type="submit">Зареєструватися</button>
          </form>
        </div>
      </div>
    </main>
  )
}
