import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import Slider from "../Atomic/organisms/Slider";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";

const Home = () => {
  return (
    <TemplatePage
      content={
        <div>
          <Slider />
          <AtomContainer maxWidth="lg" style={{ paddingTop: 24 }}>
            <AtomPaper variant="outlined">
              <AtomCardContent>
                <TitleCatogery title="GAME MỚI NHẤT" />
                <GridNewGame />
              </AtomCardContent>
            </AtomPaper>
          </AtomContainer>
        </div>
      }
    ></TemplatePage>
  );
};

export default Home;
