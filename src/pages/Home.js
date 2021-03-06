import React from "react";
import GridNewGame from "../Atomic/organisms/GridNewGame";
import TemplatePage from "../Atomic/templates/TemplatePage";
import TitleCatogery from "../Atomic/molecules/TittePage";
import Slider from "../Atomic/organisms/Slider";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomPaper from "../Atomic/atoms/AtomPaper";
import AtomCardContent from "../Atomic/atoms/AtomCardContent";
import HorizontalStripeButton from "../Atomic/molecules/HorizontalStripeButton";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../Atomic/organisms/AppBar";
import Divider from "../Atomic/molecules/Divider";
import AtomStack from "../Atomic/atoms/AtomStack";
const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <TemplatePage
      appbar={<ResponsiveAppBar />}
      content={
        <div>
          <Slider />
          <AtomContainer maxWidth="xl" style={{ paddingTop: 24 }}>
            <AtomPaper>
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
        </div>
      }
    ></TemplatePage>
  );
};

export default Home;
