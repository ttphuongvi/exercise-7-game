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
      <div className="grid__newgame-container">
        <section>
          <div class="grid__newgame">
            {data.map((value, key) => {
              return (
                <>
                  {value.id > 0 && value.id < 7 && (
                    <li key={key} class="li__grid-newgame-item">
                      <h2>{value.text}</h2>
                      <div className="gridgame-newgame__image">
                        <img
                          className="img--width"
                          src={value.image}
                          alt=""
                        ></img>
                      </div>
                      <div className="grid-newgame__content">
                        <p className="description--justify">
                          {value.description}
                        </p>
                        <Button
                          title="Xem chi tiết"
                          class="custom-btn btn-3 btn--float"
                        ></Button>
                      </div>
                    </li>
                  )}
                </>
              );
            })}
          </div>
        </section>
      </div>

      <Button
        class="btn btn--margin"
        onClick={handleClick}
        title="Xem thêm"
        classSpan="btn-label"
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
