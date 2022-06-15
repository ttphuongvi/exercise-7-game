import React from "react";
import Dialog from "../../components/Dialog";
import Title from "../../components/Title";
import "./styles.css";
import dataYear from "./dataYear.js";
const ListGame = () => {
  return (
    <div className="div__ListGame">
      <Title title="DANH SÁCH GAME"></Title>
      <section className="sec-1">
        <input></input>
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
