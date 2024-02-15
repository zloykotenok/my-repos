import ImgAzkan from "../assets/morningPage 1.svg?react";
import Azkanmount from "../assets/evening 9.svg?react";
import Router from "next/router";
import Logo from "@/components/logo/Logo";

const Entrance = () => {

  function handleClick() {
   Router.push('/login')
  }
  function handleClick2() {
    Router.push('/register')
  }
  return (
    <div>
      <header className="list_header">
        <Logo/>
        <div>
          <button className="but1" onClick={handleClick}>
            Войти
          </button>
          <button className="but2" onClick={handleClick2}>
            Регистрация
          </button>
        </div>
      </header>
      <main className="king_main">
        <div className="main_div">
          <p className="p_glav6">Азкары после утреннего намаза</p>
          <p className="p_glav2">Азкары после вечернeго намаза</p>
          <ImgAzkan/>
          <Azkanmount style={{ borderRadius: "15px" }}/>
        </div>
        <div className="main_div2">
          <p className="p_glav3">Project BismilLah</p>
          <p className="p_glav4">azkaras@m</p>
        </div>
      </main>
      <footer className="king_footer">
        <div className="footer_div">© 2023 azkars.ru</div>
        <div className="footer_div2">Авторы: <br />
        Ислам стажёр<br />
        Малик сильный<br />
        Ясмалина малина<br />
        Рахман нигер</div>
      </footer>
    </div>
  );
};
export default Entrance;

