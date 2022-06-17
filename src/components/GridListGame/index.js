import React from "react";
import Button from "../Button/index";
import data from "../Casousel/data";
import "./styles.css";
const GridListGame = () => {
  return (
    <div className="grid__listgame-container">
      <section>
        <div class="grid__listgame">
          {data.map((value, key) => (
            <li key={key} class="li__grid-listgame-item">
              <div className="gridgame-listgame__image">
                <img className="img--style" src={value.image} alt=""></img>
              </div>

              <div className="grid-listgame__content">
                <h2>{value.caption}</h2>
                <p className="description--justify">{value.description}</p>
                <Button title="Xem chi tiết" class="btn-viewdetails "></Button>
              </div>
            </li>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridListGame;
