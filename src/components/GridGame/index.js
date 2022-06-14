import React from "react";
import "./styles.css";
import { Link, Route, Routes } from "react-router-dom";
import data from "../Casousel/data";
import ListGame from "./../../screens/ListGame/index";
import Button from "../../components/Button";
import Title from "../Title/index";
// import { Grid } from "@material-ui/core";
const GridGame = (props) => {
  // let { startIndex, endIndex, data } = props;

  // let subset = data.slice(startIndex, endIndex);
  return (
    <div className="div__container--flex">
      <Title title="HOT GAMES"></Title>
      <div className="box__container">
        <section>
          <div class="grid">
            {data.map((value, key) => (
              <div key={key} class="grid__item">
                <img className="img--width" src={value.image} alt=""></img>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Link className="custom-btn btn-3 link__view-more" to="/menu">
        Xem thêm
      </Link>
      <Button className="btn-3 custom-btn" title="Xem thêm">
        {" "}
      </Button>

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
