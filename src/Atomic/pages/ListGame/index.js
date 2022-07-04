import { React, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "./styles";
import DialogCreateGame from "../../molecules/DialogCreateGame";
import "./styles.css";
import GridListGame from "../../organisms/GridListGame";
import "./styles.css";
import AtomTextField from "../../atoms/AtomTextField";
import TitleCatogery from "../../molecules/TitleCatogery";
const ListGame = () => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <TitleCatogery
      className={classes.marginTitleCatogery}
      title="DANH SÁCH GAME"
    >
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
    </TitleCatogery>
  );
};

export default ListGame;
