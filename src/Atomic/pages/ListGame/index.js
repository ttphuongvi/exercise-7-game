import { React, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import DialogCreateGame from "../../molecules/DialogCreateGame";
import Title from "../../../components/Title";
import "./styles.css";
import GridListGame from "../../organisms/GridListGame";
import "./styles.css";
import AtomTextField from "../../atoms/AtomTextField";
const ListGame = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // const [currency, setCurrency] = React.useState();

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <Title class="div__container--flex mr-t--100" title="DANH SÁCH GAME">
      <div className="div__ListGame">
        <section className="sec-1 flex--row flex--spacebetween">
          <div className="search flex--row search__input">
            <AtomTextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Tìm kiếm game"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                views={["year"]}
                inputVariant="outlined"
                label="Năm phát hành"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>
          <DialogCreateGame />
        </section>
        <GridListGame input={inputText} />
      </div>
    </Title>
  );
};

export default ListGame;
