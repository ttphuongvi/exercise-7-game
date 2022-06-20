import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ListGame from "../../screens/ListGame/index";
import { TabBarContext } from "../../context/TabBarContext";
import Title from "../Title/index";
import axios from "axios";
import Button from "./../Button/index";

const GridNewGame = () => {
  const { tabBarValue, setTabBarValue } = useContext(TabBarContext);
  const [dataSource, setDataSource] = useState([]);
  // let navigate = useNavigate();
  const handleClick = () => {
    // navigate("/menu");
    setTabBarValue(1);
  };
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=6").then((res) => {
      setDataSource(res.data);
    });
  }, []);
  return (
    <div className="div__container--flex">
      <Title title="GAME MỚI NHẤT"></Title>
      <div className="grid__newgame-container">
        <section>
          <div class="grid__newgame">
            {dataSource.map((value, key) => {
              return (
                <li key={key} class="li__grid-newgame-item">
                  <h2>{value.caption}</h2>
                  <div className="gridgame-newgame__image">
                    <img className="img--width" src={value.image} alt=""></img>
                  </div>
                  <div className="grid-newgame__content">
                    <p className="description--justify">{value.description}</p>
                    <Button class="custom-btn btn-3 btn--float">
                      Xem chi tiết
                    </Button>
                  </div>
                </li>
              );
            })}
          </div>
        </section>
      </div>

      <Button class="btn " onClick={handleClick} classSpan="btn-label">
        Xem thêm
      </Button>

      {/* <Routes>
        <Route path="/menu" element={<ListGame />} />
      </Routes> */}
    </div>
  );
};
{
}

export default GridNewGame;
