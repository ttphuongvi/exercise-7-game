import { React, useEffect, useState } from "react";
import Button from "../Button/index";
import data from "../Casousel/data";
import axios from "axios";
import "./styles.css";
const GridListGame = (props) => {
  // const filteredData = data.filter((el) => {
  //   //if no input the return the original
  //   if (props.input === "") {
  //     return el;
  //   }
  //   //return the item which contains the user input
  //   else {
  //     return el.text.toLowerCase().includes(props.input);
  //   }
  // });
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios.get("/games?_sort=id&_order=desc&_start=0&_limit=8").then((res) => {
      setDataSource(res.data);
    });
  }, []);
  return (
    <div className="grid__listgame-container">
      <section>
        <ul class="grid__listgame">
          {dataSource.map((value, key) => {
            return (
              <li key={key} class="li__grid-listgame-item">
                <div className="gridgame-listgame__image">
                  <img className="img--style" src={value.image} alt=""></img>
                </div>
                <div className="grid-listgame__content">
                  <h2>{value.caption}</h2>
                  <div className="div__release-year">{value.release}</div>
                  <p className="description--justify">{value.description}</p>
                  <Button
                    title="Xem chi tiết"
                    class="custom-btn btn-3 btn--float "
                  ></Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default GridListGame;
