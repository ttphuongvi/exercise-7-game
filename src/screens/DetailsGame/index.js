import { React, useState, useEffect } from "react";
import { Link, useParams, useMatch } from "react-router-dom";
import axios from "axios";
import Title from "../../components/Title";
import "./styles.css";
const DetailsGame = () => {
  let { params } = useParams();
  // let { url } = useMatch();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`${urlRequest}${params}`).then((res) => {
      setDataSource(res.data[0]);
    });
    console.log(params);
    console.log(dataSource);
  }, [params]);
  // console.log(id);
  // console.log("aa");
  // console.log(dataSource);
  return (
    <div>
      {dataSource && (
        <div>
          <Title title="Chi tiết game">
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
              <div className="details-game__body"></div>
            </div>
          </Title>
        </div>
      )}
    </div>
  );
};
export default DetailsGame;
