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
import DivFlexRow from "../molecules/DivFlexRow";
import CaptionGame from "../molecules/CaptionGame";
import { createTheme, styled } from "@material-ui/core/styles";
import AtomContainer from "../atoms/AtomContainer";

const theme = createTheme();

const CardContainerStyles = styled(AtomCard)({
  boxShadow:
    "0 4px 8px 0 rgb(227 211 211 / 20%), 0 6px 20px 0 rgb(168 163 163 / 19%)",
  padding: theme.spacing(2),
  "&:hover": {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    transform: "scale(1.05)",
  },
});

const ContainerGridListNewGame = styled(AtomContainer)({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
});

const GridNewGame = ({ navigateTabListgame }) => {
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
              <CardContainerStyles>
                <CaptionGame>{value.caption}</CaptionGame>
                <DivFlexRow>
                  <ContainerImageNewGame>
                    <ImageNewGame src={value.image} alt=""></ImageNewGame>
                  </ContainerImageNewGame>
                  <ContainerContentNewGame>
                    <DescriptionGame>{value.description}</DescriptionGame>
                    <ButtonStyle1
                      label="Xem chi tiết"
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    />
                  </ContainerContentNewGame>
                </DivFlexRow>
              </CardContainerStyles>
            </AtomGrid>
          );
        })}
      </AtomGrid>
      <ButtonStyle2 onClick={handleClick} label="Xem thêm"></ButtonStyle2>
    </ContainerGridListNewGame>
  );
};

export default GridNewGame;
