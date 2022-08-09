import React from "react";
import { useNavigate } from "react-router-dom";
import SquareStripeButton from "../molecules/ButtonSquareStripe";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import DescriptionGame from "../molecules/DescriptionGame";
import CaptionGame from "../molecules/CaptionGame";
import { darken } from "@mui/material/styles";
import getNewGames from "../../services/games";
import AtomStack from "../atoms/AtomStack";
import { useEffect } from "react";
import AtomBox from "../atoms/AtomBox";

const GridNewGame = () => {
  const [dataSource, setDataSource] = React.useState([]);

  useEffect(() => {
    if (localStorage.getItem("listGame") != null) {
      let listGame = JSON.parse(localStorage.getItem("listGame"));
      setDataSource(listGame.slice(0, 6));
    } else {
      const data = getNewGames(6);
      localStorage.setItem("listGame", JSON.stringify(data));
      setDataSource(data.slice(0, 6));
    }
  }, []);

  let navigate = useNavigate();

  return (
    <AtomGrid container spacing={2}>
      {dataSource.map((value) => {
        return (
          <AtomGrid key={value.id} item xs={12} sm={12} md={6} lg={6} xl={4}>
            <AtomCard
              elevation={0}
              sx={(theme) => ({
                padding: theme.spacing(2),
                backgroundColor: theme.palette.background.card,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
                  // backgroundImage: `linear-gradient(to top, ${
                  //   theme.palette.background.card
                  // } , ${alpha(theme.palette.primary.main, 0.2)} ,${alpha(
                  //   theme.palette.primary.main,
                  //   0.1
                  // )} )`,
                },
              })}
            >
              <AtomGrid container spacing={1}>
                <AtomGrid item xs={12}>
                  <CaptionGame>{value?.caption}</CaptionGame>
                </AtomGrid>
                <AtomGrid item xl={6} lg={6} md={6} sm={6} xs={12}>
                  <AtomBox
                    sx={(theme) => ({
                      height: "100%",
                      boxShadow: ` 0px 2px 3px 1px ${darken(
                        theme.palette.primary.main,
                        0.9
                      )}`,
                      border: ` 1px solid ${darken(
                        theme.palette.primary.main,
                        0.7
                      )}`,
                      borderRadius: "5px",
                      overflow: "hidden",
                    })}
                  >
                    <AtomBox
                      component="img"
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                      src={value.image}
                      alt=""
                    ></AtomBox>
                  </AtomBox>
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
            </AtomCard>
          </AtomGrid>
        );
      })}
    </AtomGrid>
  );
};

export default GridNewGame;
