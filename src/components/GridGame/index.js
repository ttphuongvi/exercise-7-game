import React from "react";
import "./styles.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import data from "../Casousel/data";
import ListGame from "./../../screens/ListGame/index";
import Button from "../../components/Button";
import Title from "../Title/index";
// import { Grid } from "@material-ui/core";

const GridGame = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  // let { startIndex, endIndex, data } = props;

  // let subset = data.slice(startIndex, endIndex);
  return (
    <div className="div__container--flex">
      <Title title="HOT GAMES"></Title>
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
        class="custom-btn btn-3 "
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
  /* <GridGame startIndex={1} endIndex={6} data={this.state.data} />; */
}

export default GridGame;
