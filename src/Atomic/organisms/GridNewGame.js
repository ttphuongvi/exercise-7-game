import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SquareStripeButton from "../molecules/SquareStripeButton";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import ContainerImageNewGame from "../molecules/ContainerImageNewGame";
import ImageNewGame from "../molecules/ImageNewGame";
import ContainerContentNewGame from "../molecules/ContainerContentNewGame";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import { createTheme, styled } from "@mui/material/styles";
import AtomContainer from "../atoms/AtomContainer";
import getNewGames from "../../services/games";

const theme = createTheme();

const CardContainerStyles = styled(AtomCard)({
  // boxShadow: theme.shadows[1],
  padding: theme.spacing(2),
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    transform: "scale(1.05)",
  },
  transition: "transform 0.3s ",
});

const ThemeContainer = styled(CardContainerStyles)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  "&:hover": {
    boxShadow: theme.shadows[2],
    transform: "scale(1.05)",
  },
}));

const GridNewGame = () => {
  const data = getNewGames(6);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <AtomGrid container spacing={3}>
      {data.map((value) => {
        return (
          <AtomGrid key={value.id} item xs={12} sm={6} md={6} lg={4}>
            <ThemeContainer>
              <AtomGrid container spacing={1}>
                <AtomGrid item xs={12}>
                  <CaptionGame>{value?.caption}</CaptionGame>
                </AtomGrid>
                <AtomGrid item xs={6}>
                  <ContainerImageNewGame>
                    <ImageNewGame src={value.image} alt=""></ImageNewGame>
                  </ContainerImageNewGame>
                </AtomGrid>
                <AtomGrid item xs={6} alignItems="flex-end">
                  <ContainerContentNewGame>
                    <DescriptionGame>{value.description}</DescriptionGame>
                    <SquareStripeButton
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
  );
};

export default GridNewGame;
