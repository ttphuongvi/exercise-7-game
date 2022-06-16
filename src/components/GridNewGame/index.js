import React from "react";
import "./styles.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import data from "../Casousel/data";
import ListGame from "../../screens/ListGame/index";
import Button from "../Button";
import Title from "../Title/index";

const GridNewGame = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className="div__container--flex">
      <Title title="GAME MỚI NHẤT"></Title>
      <div className="box__container">
        <section>
          <div class="grid">
            {data.map((value, key) => (
              <li key={key} class="grid__item">
                <h2>{value.caption}</h2>
                <div className="gridgame__image">
                  <img className="img--width" src={value.image} alt=""></img>
                </div>
                <div className="gridgame__content">
                  <p className="description--justify">{value.description}</p>
                  <Button title="Xem chi tiết" class="btn__readmore "></Button>
                </div>
              </li>
            ))}
          </div>
        </section>
      </div>

      <Button
        class="custom-btn btn-3 btn--margin"
        onClick={handleClick}
        title="Xem thêm"
      ></Button>

      <Routes>
        <Route path="/menu" element={<ListGame />} />
      </Routes>
    </div>
  );
};
{
}

export default GridNewGame;
