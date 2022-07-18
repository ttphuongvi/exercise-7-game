import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonStyle2 from "../molecules/ButtonStyle2";
import ButtonStyle1 from "../molecules/ButtonStyle1";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import ContainerImageNewGame from "../molecules/ContainerImageNewGame";
import ImageNewGame from "../molecules/ImageNewGame";
import ContainerContentNewGame from "../molecules/ContainerContentNewGame";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import { createTheme, styled } from "@material-ui/core/styles";
import AtomContainer from "../atoms/AtomContainer";

const theme = createTheme();

const CardContainerStyles = styled(AtomCard)({
  // boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    transform: "scale(1.05)",
  },
});

const ThemeContainer = styled(CardContainerStyles)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  "&:hover": {
    boxShadow: theme.shadows[2],
    transform: "scale(1.05)",
  },
}));

const ContainerGridListNewGame = styled(AtomContainer)({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  paddingRight: 0,
  paddingLeft: 0,
});

const GridNewGame = () => {
  const [dataSource, setDataSource] = useState([]);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  useEffect(() => {
    axios
      .get(
        "https://game.phong940253.tk/games?_sort=id&_order=desc&_start=0&_limit=6"
      )
      .then((res) => {
        setDataSource(res.data);
      });
    // console.log(dataSource);
  }, []);

  return (
    <ContainerGridListNewGame>
      <AtomGrid container spacing={3}>
        {dataSource.map((value) => {
          return (
            <AtomGrid key={value.id} item xs={12} sm={6} md={6} lg={4}>
              <ThemeContainer>
                <AtomGrid container>
                  <AtomGrid item xs={12}>
                    <CaptionGame>{value.caption}</CaptionGame>
                  </AtomGrid>
                  <AtomGrid item xs={6}>
                    <ContainerImageNewGame>
                      <ImageNewGame src={value.image} alt=""></ImageNewGame>
                    </ContainerImageNewGame>
                  </AtomGrid>
                  <AtomGrid
                    item
                    xs={6}
                    direction="column"
                    alignItems="flex-end"
                  >
                    <ContainerContentNewGame>
                      <DescriptionGame>{value.description}</DescriptionGame>
                      <ButtonStyle1
                        label="Xem chi tiết"
                        onClick={() => {
                          navigate(`/${value.id}`);
                        }}
                      />
                    </ContainerContentNewGame>
                  </AtomGrid>
                </AtomGrid>
              </ThemeContainer>
            </AtomGrid>
          );
        })}
      </AtomGrid>
      <ButtonStyle2 onClick={handleClick} label="Xem thêm"></ButtonStyle2>
    </ContainerGridListNewGame>
  );
};

export default GridNewGame;
