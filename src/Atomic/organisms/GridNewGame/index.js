import React, { useEffect, useState } from "react";
import "./styles.css";
// import { TabBarContext } from "../../../context/TabBarContext";
import Title from "../../../components/Title";
import axios from "axios";
import Button from "../../atoms/Button/index";
import { useNavigate } from "react-router-dom";
import DetailsGame from "../../pages/DetailsGame";
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
  // const [value, setValue] = React.useState(0);
  // const handleChange = (event, newValue) => {
  //   // setTabBarValue(newValue);
  //   setValue(newValue);
  // };
  // let match = useMatch();
  // console.log(path);
  // let { id } = useParams();
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
                    <Button
                      class="custom-btn btn-3 btn--float"
                      // to={`/${value.id}`}
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </li>
              );
            })}
          </div>
        </section>
      </div>
      <Button
        class="btn "
        onClick={() => {
          navigateTabListgame(0, 1);
        }}
        classSpan="btn-label"
      >
        Xem thêm
      </Button>
    </Title>
  );
};

export default GridNewGame;
