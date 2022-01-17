import { useEffect, useState } from "react";
import level1 from "./images/nivel1.jpg";
import level2 from "./images/nivel2.jpg";
import level3 from "./images/nivel3.jpg";
import "./EspecificChamp.css";
import './EspecificChampQ.css'
import figther from "./images/Fighter.png";
import tank from "./images/tank.png";
import mage from "./images/mage.png";
import assassin from "./images/assassin.png";
import adc from "./images/adc.png";

const EspecificChamp = ({ el, setGonnaShow, name}) => {
  const [valor, setValor] = useState("");
  const [skin, setSkin] = useState(0);

  let num_skins = [];
  let name_skin = [];

  let title,
    namee,
    Img0,
    lore,
    rol,
    dificultad,
    icon_pasiva,
    icon_Q,
    icon_W,
    icon_E,
    icon_R,
    key,
    img_rol,
    img_level;

  let descriptionP_name,
    description_pasive,
    descriptionQ_name,
    description_q,
    descriptionW_name,
    description_w,
    descriptionE_name,
    description_e,
    descriptionR_name,
    description_r;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (el[name]) {
    title = el[name]["title"];
    namee = el[name]["name"];
    Img0 = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;
    lore = el[name]["lore"];
    rol = el[name]["tags"][0];

    switch (rol) {
      case "Tank":
        img_rol = tank;
        break;
      case "Fighter":
        img_rol = figther;
        break;
      case "Mage":
        img_rol = mage;
        break;
      case "Assassin":
        img_rol = assassin;
        break;
      case "Marksman":
        img_rol = adc;
        break;
      default:
        break;
    }

    dificultad = el[name]["info"]["difficulty"];

    if (dificultad > 7 && dificultad < 11) {
      img_level = level3;
      dificultad = "alto";
    }

    if (dificultad > 3 && dificultad < 8) {
      img_level = level2;
      dificultad = "medio";
    }

    if (dificultad < 4) {
      img_level = level1;
      dificultad = "bajo";
    }

    icon_pasiva = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/passive/${el[name]["passive"]["image"]["full"]}`;
    icon_Q = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el[name]["spells"][0]["image"]["full"]}`;
    icon_W = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el[name]["spells"][1]["image"]["full"]}`;
    icon_E = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el[name]["spells"][2]["image"]["full"]}`;
    icon_R = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${el[name]["spells"][3]["image"]["full"]}`;
    key = el[name]["key"];
    descriptionP_name = el[name]["passive"]["name"];
    description_pasive = el[name]["passive"]["description"];

    descriptionQ_name = el[name]["spells"][0]["name"];
    description_q = el[name]["spells"][0]["description"];

    descriptionW_name = el[name]["spells"][1]["name"];
    description_w = el[name]["spells"][1]["description"];

    descriptionE_name = el[name]["spells"][2]["name"];
    description_e = el[name]["spells"][2]["description"];

    descriptionR_name = el[name]["spells"][3]["name"];
    description_r = el[name]["spells"][3]["description"];

    el[name]["skins"].map((skin) => {
      num_skins.push(skin["num"]);
      name_skin.push(skin["name"]);
    });

    name_skin[0] = "Aspecto Original";
  }

  let video = document.querySelector("video");
  let AnimationPasiva = document.getElementById("primera");
  let AnimationQ = document.getElementById("segunda");
  let AnimationW = document.getElementById("tercera");
  let AnimationE = document.getElementById("cuarta");
  let AnimationR = document.getElementById("quinta");

  useEffect(() => {
    let description = document.getElementById("description-hability");
    let title = document.getElementById("title-hability");

    let pasivaImg = document.getElementById("pasiva");
    let QImg = document.getElementById("q");
    let WImg = document.getElementById("w");
    let EImg = document.getElementById("e");
    let RImg = document.getElementById("r");

    let BigPasiva = document.getElementById("P");
    let BigQ = document.getElementById("Q");
    let BigW = document.getElementById("W");
    let BigE = document.getElementById("E");
    let BigR = document.getElementById("R");

    if (valor === "pasiva") {
      pasivaImg.style.border = "1px solid #D0A85C";
      BigPasiva.style.display = "block";
      title.innerHTML = descriptionP_name;
      description.innerHTML = description_pasive;
    } else {
      pasivaImg.style.border = "none";
      BigPasiva.style.display = "none";
      pasivaImg.style.transform = "translateY(0)";
    }

    if (valor === "q") {
      QImg.style.border = "1px solid #D0A85C";
      BigQ.style.display = "block";
      title.innerHTML = descriptionQ_name;
      description.innerHTML = description_q;
    } else {
      QImg.style.border = "none";
      BigQ.style.display = "none";
    }

    if (valor === "w") {
      WImg.style.border = "1px solid #D0A85C";
      BigW.style.display = "block";
      title.innerHTML = descriptionW_name;
      description.innerHTML = description_w;
    } else {
      WImg.style.border = "none";
      BigW.style.display = "none";
    }

    if (valor === "e") {
      EImg.style.border = "1px solid #D0A85C";
      BigE.style.display = "block";
      title.innerHTML = descriptionE_name;
      description.innerHTML = description_e;
    } else {
      EImg.style.border = "none";
      BigE.style.display = "none";
    }

    if (valor === "r") {
      RImg.style.border = "1px solid #D0A85C";
      BigR.style.display = "block";
      title.innerHTML = descriptionR_name;
      description.innerHTML = description_r;
    } else {
      RImg.style.border = "none";
      BigR.style.display = "none";
    }
  }, [valor]);

  const handlerMouseOut = (e) => {
    switch (e.target.id) {
      case "pasiva":
        AnimationPasiva.style.backgroundColor = "rgb(80, 79, 79)";
        break;
      case "q":
        AnimationQ.style.backgroundColor = "rgb(80, 79, 79)";
        break;
      case "w":
        AnimationW.style.backgroundColor = "rgb(80, 79, 79)";
        break;
      case "e":
        AnimationE.style.backgroundColor = "rgb(80, 79, 79)";
        break;
      case "r":
        AnimationR.style.backgroundColor = "rgb(80, 79, 79)";
        break;
      default:
        break;
    }
  };

  const handlerMouseOver = (e) => {
    switch (e.target.id) {
      case "pasiva":
        AnimationPasiva.style.backgroundColor = "#D0A85C";
        break;
      case "q":
        AnimationQ.style.backgroundColor = "#D0A85C";
        break;
      case "w":
        AnimationW.style.backgroundColor = "#D0A85C";
        break;
      case "e":
        AnimationE.style.backgroundColor = "#D0A85C";
        break;
      case "r":
        AnimationR.style.backgroundColor = "#D0A85C";
        break;
      default:
        break;
    }
  };

  const handlerClick = (e) => {
    switch (e.target.id) {
      case "pasiva":
        video.src = pasiva;
        setValor("pasiva");
        break;
      case "q":
        video.src = Q;
        setValor("q");
        break;
      case "w":
        video.src = W;
        setValor("w");
        break;
      case "e":
        video.src = E;
        setValor("e");
        break;
      case "r":
        video.src = R;
        setValor("r");
        break;
      default:
        break;
    }
  };

  const handlerSkin = (side) => {
    let value;
    if (side === "rigth") {
      if (skin < num_skins.length - 1) {
        value = skin + 1;
        setSkin(value);
      }
    }

    if (side === "left") {
      if (skin > 0) {
        value = skin - 1;
        setSkin(value);
      }
    }
  };

  if (key < 100 && key > 10) {
    key = key.toString();
    key = `0${key}`;
  } else if (key < 10) {
    key = key.toString();
    key = `00${key}`;
    console.log(key);
  }

  let pasiva = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_P1.webm`;
  let Q = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_Q1.webm`;
  let W = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_W1.webm`;
  let E = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_E1.webm`;
  let R = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${key}/ability_0${key}_R1.webm`;

  return (
    <>
      <article className="principal">
        <span onClick={() => setGonnaShow("principal")} className="return">
          lista de campeones
        </span>
        <img className="principal-img" src={Img0} alt="" />
        <div className="box"></div>
        <div className="champ">
          <p className="champ-des">{title}</p>
          <p className="champ-name">{namee}</p>
        </div>
        <div className="about-champ">
          <span className="line"></span>

          <div className="rol">
            <div className="box-rol">
              <img src={img_rol} alt="" className="rol-img" />
              <small className="color-cafe">ROL</small>
              <small className="tag">{rol}</small>
            </div>

            <div className="description">
              <img src={img_level} alt="" className="level" />
              <small className="dificultad">DIFCULTAD</small>
              <small className="color">{dificultad}</small>
            </div>
          </div>

          <div className="lore">
            <p>{lore}</p>
          </div>
        </div>

        <div className="habilidades">
          <span className="span-1"></span>
          <span className="span-2"></span>
          <div className="box-habilidades">
            <h1>Habilidades</h1>
            <div id="P" className="big">
              <div></div>
            </div>
            <div id="Q" className="big">
              <div></div>
            </div>
            <div id="W" className="big">
              <div></div>
            </div>
            <div id="E" className="big">
              <div></div>
            </div>
            <div id="R" className="big">
              <div></div>
            </div>
            <ul className="ball">
              <li id="primera"></li>
              <li id="segunda"></li>
              <li id="tercera"></li>
              <li id="cuarta"></li>
              <li id="quinta"></li>
            </ul>
            <ul
              className="abilitys-box"
              onClick={handlerClick}
              onMouseOver={handlerMouseOver}
              onMouseOut={handlerMouseOut}
            >
              <li>
                {" "}
                <img
                  className="hab"
                  id="pasiva"
                  src={icon_pasiva}
                  alt=""
                />{" "}
              </li>
              <li>
                {" "}
                <img className="hab" id="q" src={icon_Q} alt="" />{" "}
              </li>
              <li>
                {" "}
                <img className="hab" id="w" src={icon_W} alt="" />{" "}
              </li>
              <li>
                {" "}
                <img className="hab" id="e" src={icon_E} alt="" />{" "}
              </li>
              <li>
                {" "}
                <img className="hab" id="r" src={icon_R} alt="" />{" "}
              </li>
            </ul>
            <div className="description-hability">
              <h2 id="title-hability"> </h2>
              <p id="description-hability"></p>
            </div>
          </div>

          <div className="video">
            <video
              width="500"
              heigth="300"
              src={pasiva}
              autoPlay={"autoplay"}
            ></video>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,101.3C840,107,960,117,1080,112C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </article>

      <article className="skins">
        <div className="container-skins">
          <span className="name_skin">{name_skin[skin]}</span>
          <div className="left" onClick={(e) => handlerSkin("left")}></div>
          <div className="container-img">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${num_skins[skin]}.jpg`}
              alt=""
            />
          </div>
          <div className="rigth" onClick={(e) => handlerSkin("rigth")}></div>
        </div>
      </article>
    </>
  );
};

export default EspecificChamp;
