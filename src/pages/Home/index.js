import React from "react";
import GridNewGame from "../../Atomic/organisms/GridNewGame";
import Slider from "../../Atomic/organisms/Slider";
import TemplatePage from "../../Atomic/templates/TemplatePage";
import AppBarNew from "../../Atomic/organisms/AppBarNew";
import TitleCatogery from "../../Atomic/molecules/TitleCategory";
import Footer from "../../Atomic/organisms/Footer";
// import logo from "./img/hahalolo-logo.png";
const Home = ({ navigateTabListgame }) => {
  return (
    <TemplatePage
      appbar={<AppBarNew />}
      slider={<Slider />}
      title={<TitleCatogery title="GAME MỚI NHẤT" />}
      content={<GridNewGame navigateTabListgame={navigateTabListgame} />}
      footer={<Footer />}
    ></TemplatePage>
  );
};

export default Home;
