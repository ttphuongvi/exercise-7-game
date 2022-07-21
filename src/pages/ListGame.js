import { React, useState } from "react";
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DialogCreateGame from "../Atomic/molecules/DialogCreateGame";
import GridListGame from "../Atomic/organisms/GridListGame";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import { makeStyles } from "@mui/styles";
import TemplatePage from "../Atomic/templates/TemplatePage";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import TitleCatogery from "../Atomic/molecules/TittePage";
import { useSelector } from "react-redux";
import AtomDivider from "../Atomic/atoms/AtomDivider";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import { styled } from "@mui/material/styles";

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

const PaperStyles = styled(AtomPaper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const ListGame = () => {
  const user = useSelector((state) => state.user.content);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // const [selectedDate, handleDateChange] = useState(new Date());

  const classes = useStyles();
  return (
    <TemplatePage
      content={
        <AtomContainer maxWidth="xl" style={{ paddingTop: 24 }}>
          <PaperStyles>
            <AtomCardContent>
              <TitleCatogery title="DANH SÁCH GAME"></TitleCatogery>
              <AtomDivider
                light
                style={{ width: "100%", marginBottom: "16px" }}
              />
              <AtomGrid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={classes.gridContainer}
              >
                <AtomGrid item xs={9}>
                  <AtomGrid className={classes.search} item xs={4}>
                    <AtomTextField
                      id="outlined-basic"
                      onChange={inputHandler}
                      variant="outlined"
                      // fullwidth
                      label="Tìm kiếm game"
                    />
                  </AtomGrid>
                  <AtomGrid item>
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    views={["year"]}
                    inputVariant="outlined"
                    label="Năm phát hành"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider> */}
                  </AtomGrid>
                </AtomGrid>
                {user && user.isLogin ? (
                  <AtomGrid>
                    <DialogCreateGame />
                  </AtomGrid>
                ) : (
                  <></>
                )}
              </AtomGrid>
              <GridListGame input={inputText} />
            </AtomCardContent>
          </PaperStyles>
        </AtomContainer>
      }
    ></TemplatePage>
  );
};

export default ListGame;
