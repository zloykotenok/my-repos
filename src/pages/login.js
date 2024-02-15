import MyButton from "../components/button/MyButton";
import MyInput from "../components/input/MyInput";
import Logo from "../components/logo/Logo";
import { useState } from "react";
import Router from "next/router";

const Authorization = ({}) => {
  const [email1, setEmailT] = useState("");
  const [password1, setPasswordT] = useState("");
  const email_true = localStorage.getItem("email_number");
  const password_true = localStorage.getItem("password_number");
  function handleClick() {
    if (email1.trim() === email_true && password1.trim() === password_true) {
      Router.push('/azkan');
    } else {
      alert("Вы должны правильно заполнить данные!");
    }
  }
  return (
    <div>
      <Logo />
      <div className="post_glav">
        <h1 className="kingName">Войти</h1>
        <div className="forma_my">
          <MyInput
            value={email1}
            onChange={(event) => setEmailT(event.target.value)}
            type="text"
            placeholder="Email"
          ></MyInput>
          <MyInput
            value={password1} 
            onChange={(event) => setPasswordT(event.target.value)} 
            type="text"
            placeholder="Пароль"
          ></MyInput>
          <a className="a_king" href="/dua_reg">
            Нет аккаунта? Зарегистрируйтесь!
          </a>
        </div>
        <MyButton onClick={handleClick}>Готово</MyButton>
      </div>
    </div>
  );
};
export default Authorization;
