import React, { useEffect, useState } from "react";
import "./styles.css";
// import { TabBarContext } from "../../../context/TabBarContext";
import Title from "../../../components/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import ButtonStyle1 from "../../molecules/ButtonStyle1";
// import AtomButtonStyle from "../../atoms/AtomButtonStyle";
const GridNewGame = ({ navigateTabListgame }) => {
  // const { tabBarValue, setTabBarValue } = useContext(TabBarContext);
  const [dataSource, setDataSource] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=6").then((res) => {
      setDataSource(res.data);
    });
    console.log(dataSource);
  }, []);
  return (
    <Title class="div__container--flex " title="Game mới nhất">
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
                    <p className="description--justify description--justify--line-clamp-8">
                      {value.description}
                    </p>
                    <ButtonStyle1
                      label="Xem chi tiết"
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </div>
        </section>
        <ButtonStyle2
          onClick={() => {
            navigateTabListgame(0, 1);
          }}
          label="Xem thêm"
        ></ButtonStyle2>
      </div>
    </Title>
  );
};

export default GridNewGame;
