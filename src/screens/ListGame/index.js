import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "../../components/Dialog";
import Title from "../../components/Title";
import "./styles.css";
import dataYear from "./dataYear.js";
const ListGame = () => {
  return (
    <div className="div__ListGame">
      <Title title="DANH SÁCH GAME"></Title>
      <section className="sec-1">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <select>
          {dataYear.map((value, key) => (
            <option key={key} value={value.value}>
              {value.year}
            </option>
          ))}
        </select>
        <Dialog />
      </section>
    </div>
  );
};

export default ListGame;
