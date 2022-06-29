import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../../../components/Title";
import "./styles.css";
import DialogPlayGame from "../../organisms/DialogPlayGame";
const DetailsGame = () => {
  let { params } = useParams();
  // let { url } = useMatch();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`${urlRequest}${params}`).then((res) => {
      setDataSource(res.data[0]);
      console.log(res.data);
      // console.log(dataSource);
    });
  }, [params]);
  // console.log(id);
  // console.log("aa");
  // console.log(dataSource);
  return (
    <div>
      {dataSource && (
        <div>
          <Title class="div__container--flex" title="Chi tiết game">
            <div className="details-game__container">
              <div className="details-game__header">
                <div className="details-game__info">
                  <h2 className="details-game__caption">
                    {dataSource.caption}
                  </h2>
                  <div className="details-game__release">
                    {" "}
                    Ngày phát hành {dataSource.release}
                  </div>
                </div>
                <img
                  className="details-game__image"
                  src={dataSource.image}
                  alt=""
                ></img>
              </div>
              <div className="details-game__body">
                <div className="details-game__description">
                  {dataSource.description}
                </div>
                <DialogPlayGame
                  caption={dataSource.caption}
                  link={dataSource.link}
                />
              </div>
            </div>
          </Title>
        </div>
      )}
    </div>
  );
};
export default DetailsGame;
