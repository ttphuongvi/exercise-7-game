import { React, useState } from "react";
import DialogCreateGame from "../Atomic/molecules/DialogMaxWidth/DialogCreateGame";
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
import AtomDatePicker from "../Atomic/atoms/AtomDatePicker";
import AtomLocalizationProvider from "../Atomic/atoms/AtomLocalizationProvider";
import AtomAdapterDateFns from "../Atomic/atoms/AtomAdapterDateFns";

const ListGame = () => {
  const user = useSelector((state) => state.user.content);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  const [value, setValue] = useState("");
  let inputHandleYear = (e) => {
    if (e) {
      var yearSlice = e.toString().slice(11, 15);
      console.log(yearSlice);
      setValue(yearSlice);
    } else {
      setValue("");
    }
  };
  // const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <TemplatePage
      content={
        <AtomContainer
          maxWidth={false}
          sx={(theme) => ({
            paddingTop: theme.spacing(2),
            minHeight: "100vh",
          })}
        >
          <AtomPaper sx={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" }}>
            <AtomCardContent>
              <TitleCatogery title="DANH SÁCH GAME"></TitleCatogery>
              <Divider />
              <AtomGrid
                mb={2}
                container
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <AtomGrid item xs={12} sm={12} lg={7} md={12}>
                  {/* <AtomStack id="search-game" direction={"row"} spacing={2}> */}
                  <AtomGrid id="search-game" container spacing={2}>
                    <AtomGrid item xs={6} sm={6} md={6} lg={5}>
                      <AtomTextField
                        onChange={inputHandler}
                        variant="outlined"
                        label="Tìm kiếm game"
                        fullWidth
                      />
                    </AtomGrid>
                    <AtomGrid item xs={6} sm={6}>
                      <AtomLocalizationProvider
                        dateAdapter={AtomAdapterDateFns}
                      >
                        <AtomDatePicker
                          views={["year"]}
                          label="Năm phát hành"
                          value={value}
                          onChange={inputHandleYear}
                          renderInput={(params) => (
                            <AtomTextField {...params} helperText={null} />
                          )}
                        />
                      </AtomLocalizationProvider>
                    </AtomGrid>
                  </AtomGrid>
                  {/* </AtomStack> */}
                </AtomGrid>

                <AtomGrid item>
                  {user && user.isLogin ? (
                    <AtomGrid>
                      <DialogCreateGame id="create-game" />
                    </AtomGrid>
                  ) : (
                    <></>
                  )}
                </AtomGrid>
              </AtomGrid>
              <GridListGame input={inputText} year={value} />
            </AtomCardContent>
          </AtomPaper>
        </AtomContainer>
      }
    ></TemplatePage>
  );
};

export default ListGame;
