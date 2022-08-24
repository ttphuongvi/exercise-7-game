import React from "react";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import getGamesDefault from "../../services/games";
import { useEffect } from "react";
import CardNewGame from "../molecules/CardNewGame";

const GridNewGame = () => {
  const [dataSource, setDataSource] = React.useState([]);

  useEffect(() => {
    if (localStorage.getItem("listGame") != null) {
      let listGame = JSON.parse(localStorage.getItem("listGame"));
      setDataSource(listGame.slice(0, 6));
    } else {
      const data = getGamesDefault();
      localStorage.setItem("listGame", JSON.stringify(data));
      setDataSource(data.slice(0, 6));
    }
  }, []);

  let navigate = useNavigate();

  // const theme = useTheme();

  return (
    <AtomGrid container spacing={2}>
      {dataSource.map((value) => {
        return (
          <AtomGrid
            key={value.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={2.4}
            xxl={2}
          >
            <CardNewGame
              image={value.image}
              description={value.description}
              caption={value.caption}
              onClick={() => {
                navigate(`/${value.id}`);
              }}
            />
          </AtomGrid>
        );
      })}
    </AtomGrid>
  );
};

export default GridNewGame;
