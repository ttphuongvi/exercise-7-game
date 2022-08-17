import { styled } from "@mui/material/styles";
import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomCard from "../atoms/AtomCard";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomTypography from "../atoms/AtomTypography";
import ButtonSquareStripe from "./ButtonSquareStripe";
import CaptionGame from "./CaptionGame";

const CardStyles = styled(AtomCard)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  transition: "all .2s ease",
  position: "relative",
  overflow: "hidden",
  "& .overlay": {
    transition: "opacity .2s ease",
    opacity: 0,
  },
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",

    "& .overlay": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      transition: "opacity .2s ease",
      opacity: 1,
      [theme.breakpoints.up("xs")]: {
        height: "250px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "300px",
      },
      [theme.breakpoints.up("xxl")]: {
        height: "500px",
      },
    },
    // "& .content": {
    //   color: "#fff",
    // },
  },
}));

const DescriptionGame = styled(AtomTypography)(({ theme }) => ({
  height: "72px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  WebkitLineClamp: 3,
}));

const CardMediaStyles = styled(AtomCardMedia)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    height: "250px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "300px",
  },
  [theme.breakpoints.up("xxl")]: {
    height: "500px",
  },
  transition: "opacity .2s ease",
}));

const CardNewGame = (props) => {
  return (
    <CardStyles elevation={0}>
      <CardMediaStyles
        component={"img"}
        image={props.image}
        onError={(e) => {
          const imgDefault = "/images/default.jpg";
          e.target.src = imgDefault;
        }}
        alt={props.image}
      ></CardMediaStyles>
      <AtomBox
        sx={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "250px",
        }}
        className="overlay"
      >
        <AtomCardAction
          className="overlay content"
          sx={{ justifyContent: "center", lineHeight: "224px" }}
        >
          <ButtonSquareStripe
            onClick={props.onClick}
            // className="button"
            label="Xem chi tiết"
          >
            {" "}
          </ButtonSquareStripe>
        </AtomCardAction>
      </AtomBox>
      <AtomCardContent sx={{}}>
        <CaptionGame>{props.caption}</CaptionGame>
        <DescriptionGame>{props.description}</DescriptionGame>
      </AtomCardContent>
    </CardStyles>
  );
};

export default CardNewGame;
