import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import Slider from "../Atomic/organisms/Slider";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import AtomDivider from "../Atomic/atoms/AtomDivider";
import AtomGrid from "../Atomic/atoms/AtomGrid";
import AtomCard from "../Atomic/atoms/AtomCard";
import AtomCardHeader from "../Atomic/atoms/AtomCardHeader";
import AtomCardAction from "../Atomic/atoms/AtomCardAction";
import HorizontalStripeButton from "../Atomic/molecules/HorizontalStripeButton";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <TemplatePage
      content={
        <div>
          <Slider />
          <AtomContainer maxWidth="xl" style={{ paddingTop: 24 }}>
            <AtomPaper>
              <AtomCardContent>
                <TitleCatogery title="GAME MỚI NHẤT" />
                <AtomDivider
                  light
                  style={{ width: "100%", marginBottom: "16px" }}
                />
                <GridNewGame />
              </AtomCardContent>
              <AtomCardAction style={{ justifyContent: "center" }}>
                <HorizontalStripeButton
                  onClick={handleClick}
                  label="Xem thêm"
                ></HorizontalStripeButton>
              </AtomCardAction>
            </AtomPaper>
          </AtomContainer>
        </div>
      }
    ></TemplatePage>
  );
};

export default Home;
