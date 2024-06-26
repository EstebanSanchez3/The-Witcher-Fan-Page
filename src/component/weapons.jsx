import { useState } from "react";
import "./weapons.css";

function Weapons({ title, description_title_one, description_title_two, description_text_one, description_text_two, hoverBackGround, initialBackGround }) {

  const [backGroundImage, setbackGroundImage] = useState(initialBackGround);

  const handleMouseOver = () => {
    setbackGroundImage(hoverBackGround);
  }

  const handlerMouseOut = () => {
    setbackGroundImage(initialBackGround);
  }

  return (
    <div className="card-container"
      style={{
         backgroundImage: `url(${backGroundImage})` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handlerMouseOut}>

      <div>
        <h2 className="title">{title}</h2>
      </div>
      <div className="description-container">
        <div className="description">
          <p className="description-title">{description_title_one}</p>
          <p className="description-text">{description_text_one}</p>
        </div>
        <div className="description">
          <p className="description-title">{description_title_two}</p>
          <p className="description-text">{description_text_two}</p>
        </div>
      </div>

    </div>
  );
  
}

export default Weapons;