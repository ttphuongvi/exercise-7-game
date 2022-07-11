import React from "react";
import GridNewGame from "../../organisms/GridNewGame";
import Slider from "../../organisms/Slider";
import TemplateHome from "../../templates/TemplateHome";
// import logo from "./img/hahalolo-logo.png";
const Home = ({ navigateTabListgame }) => {
  return (
    <TemplateHome
      slider={<Slider />}
      gridNewGame={<GridNewGame navigateTabListgame={navigateTabListgame} />}
    ></TemplateHome>
  );
};

export default Home;
