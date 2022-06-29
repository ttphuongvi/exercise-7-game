import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogCreateGame from "../../organisms/DialogCreateGame/index";
import Title from "../../../components/Title";
import "./styles.css";
import dataYear from "./dataYear.js";
import GridListGame from "../../organisms/GridListGame";
import "./styles.css";
const ListGame = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <Title class="div__container--flex mr-t--100" title="DANH SÁCH GAME">
      <div className="div__ListGame">
        <section className="sec-1 flex--row flex--spacebetween">
          <div className="search flex--row search__input">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Tìm kiếm game"
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
          <DialogCreateGame />
        </section>
        <GridListGame input={inputText} />
      </div>
    </Title>
  );
};

export default ListGame;
