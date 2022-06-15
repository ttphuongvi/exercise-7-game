import React, { useState } from "react";

import Button from "./../../components/Button";
import Dialog from "../../components/Dialog";
import Title from "../../components/Title";
import "./styles.css";
const ListGame = () => {
  const [option, setOption] = useState(2010);

  return (
    <div className="div__ListGame">
      <Title title="DANH SÁCH GAME"></Title>
      <section className="sec-1">
        <input></input>
        <select>
          <option></option>
        </select>
        <Dialog />
      </section>
    </div>
  );
};

export default ListGame;
