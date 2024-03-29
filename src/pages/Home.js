import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import TitleCatogery from "../Atomic/molecules/TittePage";
import Slider from "../Atomic/organisms/Slider1";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import HorizontalStripeButton from "../Atomic/molecules/ButtonHorizontalStripe";
import { useNavigate } from "react-router-dom";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";
import { Routes, Route } from "react-router-dom";
import { BOXSHAW_PAPER } from "../store/const";
import AtomIconReadMoreOutlined from "../Atomic/atoms/AtomIconReadMoreOutlined";
const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Slider />
      <AtomContainer
        id="new-game"
        maxWidth={false}
        sx={(theme) => ({
          paddingTop: theme.spacing(2),
        })}
      >
        <AtomPaper sx={{ boxShadow: BOXSHAW_PAPER }}>
          <AtomCardContent>
            <TitleCatogery title="GAME MỚI NHẤT" />
            <Divider />
            <GridNewGame />
          </AtomCardContent>
          <AtomStack pb={3} pt={1} alignItems={"center"}>
            <HorizontalStripeButton
              icon={<AtomIconReadMoreOutlined />}
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
  );
};

export default Home;
