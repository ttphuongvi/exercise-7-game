import React from "react";
import { useNavigate } from "react-router-dom";
import AtomGrid from "../atoms/AtomGrid";
import AtomCard from "../atoms/AtomCard";
import CaptionGame from "../molecules/CaptionGame";
import getNewGames from "../../services/games";
import { useEffect } from "react";
import AtomBox from "../atoms/AtomBox";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomTypography from "../atoms/AtomTypography";
// import { useTheme } from "@mui/material/styles";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomButton from "../atoms/AtomButton";
import { alpha } from "@mui/material";

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

  // const theme = useTheme();

  return (
    <AtomGrid container spacing={2}>
      {dataSource.map((value) => {
        return (
          <AtomGrid key={value.id} item xs={12} sm={12} md={6} lg={6} xl={4}>
            <AtomCard
              elevation={0}
              sx={(theme) => ({
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
                transition: "all .2s ease",
                position: "relative",
                overflow: "hidden",
                "& .overlay": {
                  transition: "opacity .2s ease",
                  opacity: 0,
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    " 0 4px 25px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.25)",

                  "& .overlay": {
                    backgroundColor: alpha(theme.palette.background.paper, 0.7), //"rgba(25,29,38,.85)"
                    transition: "opacity .2s ease",
                    opacity: 1,
                  },
                },
              })}
            >
              <AtomCardMedia
                image={value.image}
                alt={value.image}
                sx={(theme) => ({
                  // position: "relative",
                  height: "250px",
                  transition: "opacity .2s ease",

                  "& .overlay": {
                    height: "100%",
                    backgroundColor: "#fff",
                    opacity: 0,
                    textAlign: "center",
                    color: "#fff",
                  },

                  "& .content": {
                    lineHeight: "224px",
                    color: "#fff",

                    "& .button": {
                      textTransform: "none",
                      color: theme.palette.text.primary,
                      padding: theme.spacing(1, 3),
                      border: `1px solid ${theme.palette.text.primary}`,
                      borderRadius: theme.spacing(3),
                      cursor: "pointer",
                      textDecoration: "none",
                      opacity: 1,

                      "&:hover": {
                        color: "#fff",
                        background: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  },
                })}
              >
                <AtomBox className="overlay">
                  <AtomCardAction
                    className="overlay content"
                    sx={{ justifyContent: "center" }}
                  >
                    <AtomButton
                      onClick={() => {
                        navigate(`/${value.id}`);
                      }}
                      className="button"
                    >
                      Xem chi tiết{" "}
                    </AtomButton>
                  </AtomCardAction>
                </AtomBox>
              </AtomCardMedia>
              <AtomCardContent sx={{}}>
                <CaptionGame>{value.caption}</CaptionGame>
                <AtomTypography
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3,
                  }}
                >
                  {value.description}
                </AtomTypography>
              </AtomCardContent>
            </AtomCard>
          </AtomGrid>
        );
      })}
    </AtomGrid>
  );
};

export default GridNewGame;
