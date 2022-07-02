import { React, useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";
import ButtonStyle2 from "../../molecules/ButtonStyle2";
import DialogPlayGame from "../../molecules/DialogPlayGame";
import { useSelector, useDispatch } from "react-redux";
import { SET_LIST_GAME } from "../../../redux/const";

const GridListGame = (props) => {
  const [hiddenLoadding, setHidden] = useState(false);
  const onClickLoadding = () => {
    axios.get("/games?_sort=id&_order=desc").then((res) => {
      dispatch({ type: SET_LIST_GAME, listGame: res.data });
    });
    setHidden(true);
  };

  const dataSource = useSelector((state) => state.listGame.content);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=8").then((res) => {
      dispatch({ type: SET_LIST_GAME, content: res.data });
      // set list tgame
    });
  }, []);
  // let { path, url } = useMatch();
  return (
    <div className="grid__list-game--col">
      <div className="grid__list-game--row">
        <section>
          <ul class="grid__listgame">
            {dataSource &&
              dataSource.map((value, key) => {
                return (
                  <li key={key} class="li__grid-listgame-item">
                    <div className="gridgame-listgame__image">
                      <img
                        className="img--style"
                        src={value.image}
                        alt=""
                      ></img>
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
                      <DialogPlayGame
                        caption={value.caption}
                        link={value.link}
                      />
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
