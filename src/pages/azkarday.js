import IconLike from "../assets/Like.svg?react";
import IconPallete from "../assets/palette.svg?react";
import ImgAzkan from "../assets/morningPage 1.svg?react";
import Azkanmount from "../assets/evening 9.svg?react";
import Logo from "../components/logo/Logo";
import { useState } from "react";
import MyInput from "@/components/input/MyInput";
import MyButton from "@/components/button/MyButton";

const Azkarday = ({}) => {
  const [theme, setTheme] = useState();

  const switchTheme = ( ) => {
  setTheme( (cur) => (cur === 'light' ? 'dark' : 'light' ))
  }
  const [Azkar, setAzkar] = useState([ 
    { 
      id: Math.random(), 
      nameAzkar: "Утренние Азкары №1", 
      azkar: 
        "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَ أَنَا عَبْدُكَ وَ أَنَا عَلَى عَهْدِكَ وَ وَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُّ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَ أَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ", 
      translationAzkar: 
        "О Аллах, Ты - Господь мой, и нет достойного поклонения, кроме Тебя, Ты создал меня, а я -Твой раб, и я буду хранить верность Тебе, пока у меня хватит сил. Прибегаю к Тебе от зла того, что я сделал, признаю милость, оказанную Тобой мне, и признаю грех свой. Прости же меня, ибо, поистине, никто не прощает грехов, кроме Тебя! (Бухари)", 
      transcriptionsAzkar: 
        "Аллахумма анта Рабби, ля иляха илля анта, халяктани ва ана 'абдука, ва ана 'аля а'хдика ва ва'дика мастата'ту. А'узу бикя мин шарри ма сана'ту, абуу лякя би ни'матикя а'лейя ва абу бизанби фагфир лии фа иннаху ля йагфируз зунуба илля анта", 
    }, 
  ]); 
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [named, setNamed] = useState('')
  const [todo, setTodos] = useState('')
  const addNewPost = () => {
       const newPost = {
        id: Math.random(),
        nameAzkar: title,
        azkar: body,
        translationAzkar: named,
        transcriptionsAzkar: todo
       }
       setAzkar([...Azkar, newPost])
    }
  
  return (
    <div>
      <header className="list_header" id={theme}>
        <Logo/>
        <div className="azkan_div" id={theme}>
          <div className="azkan_div1" id={theme}>
            <IconPallete />
            <h4 className="p_style" id={theme}>Тема</h4>
          </div>
          <div className="azkan_div1" id={theme}>
            <IconLike />
            <h4 className="p_style" id={theme}>Избранные</h4>
          </div>
        </div>
      </header>
      <div className="NightDay" id={theme} >
       <p>{theme} mode</p>
       <input onChange={switchTheme} type="checkbox" ></input>
      </div>
      <main className="king_main" id={theme}>
          <div className="yoyo"><p className="p_glav">Азкары после утреннего намаза</p>
          <ImgAzkan />
          </div>
          {Azkar.map((items) => ( 
          <div className="azkarday1" id={theme} key={items.id}>
            <p className="arabic">{items.nameAzkar}</p>
            <h3 className="arabic" id={theme}>{items.azkar}</h3>
            <p className="language" id={theme}>{items.translationAzkar}
            </p>
            <p className="language" id={theme}>{items.transcriptionsAzkar}
            </p>
            <IconLike/>
          </div>))}
          <div className="create">
          <MyInput
            value = {title}
            onChange = {e => setTitle(e.target.value)}
            type="text"
            placeholder="Название Азкара"
          ></MyInput>
          <MyInput
            value = {body}
            onChange = {e => setBody(e.target.value)}
            type="text"
            placeholder="Азкар 123"
          ></MyInput>
          <MyInput
            value = {named}
            onChange = {e => setNamed(e.target.value)}
            type="text"
            placeholder="Перевод Азкара"
          ></MyInput>
          <MyInput
            value = {todo}
            onChange = {e => setTodos(e.target.value)}
            type="text"
            placeholder="Транскрипция Азкара"
          ></MyInput>
        <MyButton onClick={addNewPost} type="button">Добавить Aзкар</MyButton>
        </div>
        <div className="main_div2" id={theme}>
          <p className="p_glav3" id={theme}>Project BismilLah</p>
          <p className="p_glav4" id={theme}>azkaras@m</p>
        </div>
      </main>
      <footer className="king_footer" id={theme}>
        <div className="footer_div" id={theme}>© 2023 azkars.ru</div>
        <div className="footer_div2 " id={theme}>
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

export default Azkarday;
