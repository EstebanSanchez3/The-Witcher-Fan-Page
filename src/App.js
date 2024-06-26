import "./App.css";
import Weapons from "./component/weapons.jsx";
/*images weapons page*/
import swordsImage from "./images/swords.png";
import geraltBackImage from "./images/geralt_back.png";
import yrden from "./images/yrden.jpg";
import igni from "./images/igni.jpg";
import bomb1 from "./images/bomb1.jpg";
import bomb2 from "./images/bomb2.jpg";
import crossbow1 from "./images/crossbow1.jpg";
/*import crossbow2 from "./images/crossbow2.jpg";*/
import oil1 from "./images/oil1.png";
/*import oil2 from "./images/oil2.png";*/
import potions1 from "./images/potions1.png";
import potions2 from "./images/potions2.png";
import rune1 from "./images/rune1.png";
import rune2 from "./images/rune2.png";
/*images armors page*/
import Armors from "./component/armors.jsx";
import armor_back1 from "./images/armor_back1.jpg";

function App() {
  return (
    <div>
      {/*--------------WEAPONS------------------*/}
        <h1 className="title-section-weapons">Pertrechos de Brujo</h1>
        <div className="cards-weapons">
          <Weapons
            initialBackGround={swordsImage}
            hoverBackGround={geraltBackImage}
            description_title_one="Espada de Acero"
            description_text_one="Se usa principalmente contra humanos y según los informes, tiene poco efecto sobre los monstruos, útiles para enfrentar abestias"
            description_title_two="Espada de Plata"
            description_text_two="Es un arma diseñada específicamente para matar monstruos de naturaleza mágica, que son inmunes a las armas de acero normales. Se trata de hojas delicadas que solo deben ser empleadas para enfrentarse a criaturas vulnerables a la plata, como los no muertos y la mayor parte de los monstruos."
          />
          <Weapons
            initialBackGround={yrden}
            hoverBackGround={igni}
            description_title_one="Señales"
            description_text_one="Aunque no son magos guerreros que empleen hechizos poderosos, los brujos pueden lanzar hechizos simples que pueden ser efectivos cuando se usan apropiadamente. Los brujos llaman a estos hechizos Señales, aunque también tienen diversas aplicaciones fuera del combate. Los brujos prefieren armas de una sola mano, ya que deja la otra mano libre para poder usar señales. Las señales conocidas son: Aard, Igni, Yrden, Quen, Axia,"
          />
          <Weapons
            initialBackGround={bomb1}
            hoverBackGround={bomb2}
            description_title_one="Bombas"
            description_text_one="El arma perfecta para dañar a varios enemigos a la vez, siempre y cuando estén agrupados. No solo provocan daño, también efectos añadidos como daño por fuego, frío o envenenamiento"
          />
          <Weapons
            initialBackGround={crossbow1}
            /*hoverBackGround= {crossbow2}*/
            description_title_one="Ballestas"
            description_text_one="La ballesta se usa para derribar enemigos voladores y para atacar desde la distancia. Además, la ballesta es la única arma disponible cuando se nada o bucea"
          />
        </div>

        {/*--------------IMPROVEMENTS------------------*/}
        <h1 className="title-section-weapons">Mejoras de Campo</h1>
        <div className="cards-weapons">
          <Weapons
            initialBackGround={oil1}
            /*hoverBackGround= {oil2}*/
            description_title_one="Aceites"
            description_text_one="Para aumentar la efectividad de su espada en combate, puede cubrirla con diferentes aceites especiales. Estos están diseñados para dañar tipos específicos de enemigos."
          />
          <Weapons
            initialBackGround={potions1}
            hoverBackGround={potions2}
            description_title_one="Pociones"
            description_text_one="Las pociones que preparan los brujos son tóxicas y mortales para la mayoría de los humanos, pero a ellos les proporcionan diversos efectos que mejoran sus habilidades"
          />
          <Weapons
            initialBackGround={rune1}
            hoverBackGround={rune2}
            description_title_one="Runas"
            description_text_one=" las runas mejoran estadísticas específicas y aplican mejoras a las espadas, son complementos de mejora"
          />
        </div>
  

      {/*--------------ARMOR------------------*/}
    <div>
      <h1 className="title-section-armor">Partes de Armadura</h1>    
        <div>
          <Armors
            image_part_armor={armor_back1}
          />
        </div>
      </div>

    </div>
  );
}

export default App;