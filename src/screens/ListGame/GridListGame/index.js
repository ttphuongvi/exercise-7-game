import { React, useEffect, useState } from "react";
import Button from "../../../components/Button/index";
import axios from "axios";
import "./styles.css";
import { Link, Route, useMatch, Routes } from "react-router-dom";
import DetailsGame from "./../../DetailsGame";
import DialogPlayGame from "../../../components/DialogPlayGame";
const GridListGame = (props) => {
  const [hiddenLoadding, setHidden] = useState(false);
  const onClickLoadding = () => {
    axios.get("/games?_sort=id&_order=desc").then((res) => {
      setDataSource(res.data);
    });
    setHidden(true);
  };
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=8").then((res) => {
      setDataSource(res.data);
    });
    console.log(props.input);
  }, []);
  // let { path, url } = useMatch();
  return (
    <div className="grid__list-game--col">
      <div className="grid__list-game--row">
        <section>
          <ul class="grid__listgame">
            {dataSource.map((value, key) => {
              return (
                <li key={key} class="li__grid-listgame-item">
                  <div className="gridgame-listgame__image">
                    <img className="img--style" src={value.image} alt=""></img>
                  </div>
                  <div className="grid-listgame__content">
                    <Link to={`/${value.id}`}>
                      {" "}
                      <h2>{value.caption}</h2>
                    </Link>
                    <div className="div__release-year">
                      Phát hành ngày {value.release}
                    </div>
                    <p className="description--justify description--justify--line-clamp-9">
                      {value.description}
                    </p>
                    <DialogPlayGame caption={value.caption} link={value.link} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      {!hiddenLoadding && (
        <Button
          onClick={onClickLoadding}
          classSpan="btn-label"
          class="btn btn--margin btn__loadding-game--width"
        >
          Tải thêm game
        </Button>
      )}
    </div>
  );
};

export default GridListGame;
