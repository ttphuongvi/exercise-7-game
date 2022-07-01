import { React, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import PlayGame from "../PlayGame";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
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
                    <PlayGame caption={value.caption} link={value.link} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      {!hiddenLoadding && (
        <ButtonStyle2
          onClick={onClickLoadding}
          label="Tải thêm game"
        ></ButtonStyle2>
      )}
    </div>
  );
};

export default GridListGame;
