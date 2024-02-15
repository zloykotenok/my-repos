import MyButton from "../components/button/MyButton";
import MyInput from "../components/input/MyInput";
import Logo from "../components/logo/Logo";
import { useState } from "react";
import Router from "next/router";

const Register = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  function handleClick() {
    if (
      email.trim().length >= 8 &&
      password.trim().length >= 8 &&
      repeat.trim().length >= 8 &&
      password.trim() === repeat.trim()
    ) {
        Router.push('/azkan');
    } else if (
      email.trim().length <= 8 ||
      password.trim().length <= 8 ||
      repeat.trim().length <= 8
    ) {
      alert("Вы должны правильно заполнить данные!");
    } else if (password.trim() !== repeat.trim()) {
      alert("Пароль не совпадает");
    }
    localStorage.setItem('email_number', email.toString())
    localStorage.setItem('password_number', password.toString())
    localStorage.setItem('repeat_number', repeat.toString())
  }

  return (
    <div>
        <Logo/>
      <div className="post_glav">
        <h1 className="kingName">Регистрация</h1>
        <div className="forma_my">
          <MyInput
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="Email"
          ></MyInput>
          <MyInput
           value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
            placeholder="Пароль"
          ></MyInput>
          <MyInput
            value={repeat}
            onChange={(event) => setRepeat(event.target.value)}
            type="text"
            placeholder="Повторите пароль"
          ></MyInput>
        </div>
        <MyButton type="button" onClick={handleClick}>Зарегистрироваться</MyButton>
        <a className="a_king" href="/dua_auth">
          Есть аккаунт? Войдите!
        </a>
      </div>
    </div>
  );
};
export default Register;
