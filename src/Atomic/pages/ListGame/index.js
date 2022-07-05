import { React, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DialogCreateGame from "../../molecules/DialogCreateGame";
import GridListGame from "../../organisms/GridListGame";
import AtomTextField from "../../atoms/AtomTextField";
import TemplateListGame from "../../templates/TemplateListGame";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  search: {
    marginRight: "20px",
  },
});

const ListGame = () => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <TemplateListGame
      searchByName={
        <AtomTextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Tìm kiếm game"
          className={useStyles().search}
        />
      }
      searchByYear={
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            views={["year"]}
            inputVariant="outlined"
            label="Năm phát hành"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      }
      dialogCreateGame={<DialogCreateGame />}
      gridListGame={<GridListGame input={inputText} />}
    ></TemplateListGame>
  );
};

export default ListGame;
