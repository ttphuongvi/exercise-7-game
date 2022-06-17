import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "../../components/Dialog";
import Title from "../../components/Title";
import "./styles.css";
import dataYear from "./dataYear.js";
import GridListGame from "../../components/GridListGame";
const ListGame = () => {
  return (
    <div className="div__ListGame">
      <Title title="DANH SÁCH GAME"></Title>
      <section className="sec-1 flex--row flex--spacebetween">
        <div className="search flex--row search__input">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Tìm theo tên"
            className="search__input"
          />
          <select className="section__year">
            {dataYear.map((value, key) => (
              <option
                className="option__year--margin"
                key={key}
                value={value.value}
              >
                {value.year}
              </option>
            ))}
          </select>
        </div>
        <Dialog />
      </section>
      <GridListGame />
    </div>
  );
};

export default ListGame;
