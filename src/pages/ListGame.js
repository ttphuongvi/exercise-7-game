import { React, useState } from "react";
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DialogCreateGame from "../Atomic/molecules/DialogCreateGame";
import GridListGame from "../Atomic/organisms/GridListGame";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import TemplatePage from "../Atomic/templates/TemplatePage";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import TitleCatogery from "../Atomic/molecules/TittePage";
import { useSelector } from "react-redux";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";

const ListGame = () => {
  const user = useSelector((state) => state.user.content);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <TemplatePage
      content={
        <AtomContainer maxWidth="xl" style={{ paddingTop: 24 }}>
          <AtomPaper>
            <AtomCardContent>
              <AtomStack spacing={2}>
                <TitleCatogery title="DANH SÁCH GAME"></TitleCatogery>
                <Divider />
                <AtomGrid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <AtomGrid item xs={9}>
                    <AtomGrid item xs={4}>
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
              </AtomStack>
            </AtomCardContent>
          </AtomPaper>
        </AtomContainer>
      }
    ></TemplatePage>
  );
};

export default ListGame;
