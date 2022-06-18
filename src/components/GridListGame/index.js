import { React, useState } from "react";
import Button from "../Button/index";
import data from "../Casousel/data";
import "./styles.css";
const GridListGame = (props) => {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <div className="grid__listgame-container">
      <section>
        <ul class="grid__listgame">
          {filteredData.map((value, key) => {
            return (
              <>
                {value.id > 0 && value.id < 9 && (
                  <li key={value.id} class="li__grid-listgame-item">
                    <div className="gridgame-listgame__image">
                      <img
                        className="img--style"
                        src={value.image}
                        alt=""
                      ></img>
                    </div>
                    <div className="grid-listgame__content">
                      <h2>{value.text}</h2>
                      <p className="description--justify">
                        {value.description}
                      </p>
                      <Button
                        title="Xem chi tiết"
                        class="custom-btn btn-3 btn--float "
                      ></Button>
                    </div>
                  </li>
                )}
              </>
            );
          })}
        </ul>
        {/* <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.caption}</li>
          ))}
        </ul> */}
      </section>
    </div>
  );
};

export default GridListGame;
