import { React, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DialogCreateGame from "../Atomic/molecules/DialogCreateGame";
import GridListGame from "../Atomic/organisms/GridListGame";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../Atomic/templates/TemplatePage";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import TitleCatogery from "../Atomic/molecules/TitleCategory";
import Container from "../Atomic/molecules/Container";

const useStyles = makeStyles({
  search: {
    marginRight: "20px",
  },

  alignment: {
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  gridContainer: {
    marginBottom: "20px",
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

  const classes = useStyles();
  return (
    <TemplatePage
      content={
        <Container>
          <TitleCatogery title="DANH SÁCH GAME"></TitleCatogery>
          <AtomGrid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            className={classes.gridContainer}
          >
            <AtomGrid container xs={9} direction="row">
              <AtomGrid item xs={4}>
                <AtomTextField
                  id="outlined-basic"
                  onChange={inputHandler}
                  variant="outlined"
                  fullWidth
                  label="Tìm kiếm game"
                  className={classes.search}
                />
              </AtomGrid>
              <AtomGrid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    views={["year"]}
                    inputVariant="outlined"
                    label="Năm phát hành"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </AtomGrid>
            </AtomGrid>
            <AtomGrid>
              <DialogCreateGame />
            </AtomGrid>
          </AtomGrid>
          <GridListGame input={inputText} />
        </Container>
      }
    ></TemplatePage>
  );
};

export default ListGame;
