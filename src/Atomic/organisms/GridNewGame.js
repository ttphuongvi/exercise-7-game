import React from "react";
import { useNavigate } from "react-router-dom";
import SquareStripeButton from "../molecules/SquareStripeButton";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import ContainerImageNewGame from "../molecules/ContainerImageNewGame";
import ImageNewGame from "../molecules/ImageNewGame";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import { styled } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomStack from "../atoms/AtomStack";

const CardStyles = styled(AtomCard)(({ theme }) => ({
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.card,
  "&:hover": {
    boxShadow: theme.shadows[2],
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
}));

const GridNewGame = () => {
  const data = getNewGames(6);

  let navigate = useNavigate();

  return (
    <AtomGrid container spacing={3}>
      {data.map((value) => {
        return (
          <AtomGrid key={value.id} item xs={12} sm={6} md={6} lg={4} xl={4}>
            <CardStyles>
              <AtomGrid container spacing={1}>
                <AtomGrid item xs={12}>
                  <CaptionGame>{value?.caption}</CaptionGame>
                </AtomGrid>
                <AtomGrid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <ContainerImageNewGame>
                    <ImageNewGame src={value.image} alt=""></ImageNewGame>
                  </ContainerImageNewGame>
                </AtomGrid>
                <AtomGrid
                  item
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  alignItems="flex-end"
                >
                  <AtomStack alignItems={"flex-end"} spacing={1}>
                    <DescriptionGame>{value.description}</DescriptionGame>
                    <SquareStripeButton
                      label="Xem chi tiết"
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                    />
                  </AtomStack>
                </AtomGrid>
              </AtomGrid>
            </CardStyles>
          </AtomGrid>
        );
      })}
    </AtomGrid>
  );
};

export default GridNewGame;
