import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import Slider from "../Atomic/organisms/Slider";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import HorizontalStripeButton from "../Atomic/molecules/ButtonHorizontalStripe";
import { useNavigate } from "react-router-dom";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";
import { Routes, Route } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <TemplatePage
      content={
        <div style={{ minHeight: "100vh" }}>
          <Slider />
          <AtomContainer
            id="new-game"
            maxWidth={false}
            sx={(theme) => ({
              paddingTop: theme.spacing(2),
            })}
          >
            <AtomPaper
              sx={{ boxShadow: " rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;" }}
            >
              <AtomCardContent>
                <TitleCatogery title="GAME MỚI NHẤT" />
                <Divider />
                <GridNewGame />
              </AtomCardContent>
              <AtomStack pb={3} pt={1} alignItems={"center"}>
                <HorizontalStripeButton
                  onClick={handleClick}
                  label="Xem thêm"
                ></HorizontalStripeButton>
              </AtomStack>
            </AtomPaper>
          </AtomContainer>
          <Routes>
            <Route path="slider"></Route>
          </Routes>
        </div>
      }
    ></TemplatePage>
  );
};

export default Home;
