import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import Slider from "../Atomic/organisms/Slider";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TitleCategory";
import Container from "../Atomic/molecules/Container";
import AtomBox from "../Atomic/atoms/AtomBox";
const Home = ({ navigateTabListgame }) => {
  return (
    <TemplatePage
      content={
        <AtomBox>
          <Slider />
          <Container>
            <TitleCatogery title="GAME MỚI NHẤT" />
            <GridNewGame navigateTabListgame={navigateTabListgame} />
          </Container>
        </AtomBox>
      }
    ></TemplatePage>
  );
};

export default Home;
