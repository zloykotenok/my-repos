import IconLike from "../assets/Like.svg?react";
import IconPallete from "../assets/palette.svg?react";
import ImgAzkan from "../assets/morningPage 1.svg?react";
import Azkanmount from "../assets/evening 9.svg?react";
import Logo from "../components/logo/Logo";
import Router from "next/router";
import { useState } from "react";

const Azkans = ({}) => {
  const [theme, setTheme] = useState();

  const switchTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  function handleClick() {
    Router.push("/azkarday");
  }
  function handleClick2() {
    Router.push("/azkarnight");
  }

  return (
    <div>
      <header className="list_header" id={theme}>
        <Logo />
        <div className="azkan_div" id={theme}>
          <div className="azkan_div1" id={theme}>
            <IconPallete />
            <h4 className="p_style" id={theme}>
              Тема
            </h4>
          </div>
          <div className="azkan_div1" id={theme}>
            <IconLike />
            <h4 className="p_style" id={theme}>
              Избранные
            </h4>
          </div>
        </div>
      </header>
      <div className="NightDay" id={theme}>
        <p>{theme} mode</p>
        <input onChange={switchTheme} type="checkbox"></input>
      </div>
      <main className="king_main" id={theme}>
        <div className="yoyo" id={theme}>
          <p className="p_glav" id={theme}>
            Азкары после утреннего намаза
          </p>
          <ImgAzkan onClick={handleClick} />
        </div>
        <div className="yoyo" id={theme}>
          <p className="p_glav" id={theme}>
            Азкары после вечернeго намаза
          </p>
          <Azkanmount style={{ borderRadius: "15px" }} onClick={handleClick2} />
        </div>
        <div className="main_div2" id={theme}>
          <p className="p_glav3" id={theme}>
            Project BismilLah
          </p>
          <p className="p_glav4" id={theme}>
            azkaras@m
          </p>
        </div>
      </main>
      <footer className="king_footer" id={theme}>
        <div className="footer_div" id={theme}>
          © 2023 azkars.ru
        </div>
        <div className="footer_div2" id={theme}>
          Авторы: <br />
          Ислам босс
          <br />
          Малик сильный
          <br />
          Ясмалина малина
          <br />
          Рахман нигер
        </div>
      </footer>
    </div>
  );
};

export default Azkans;
