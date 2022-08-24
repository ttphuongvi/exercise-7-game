import { styled } from "@mui/material/styles";
import React from "react";
import AtomCard from "../atoms/AtomCard";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomStack from "../atoms/AtomStack";
import AtomTypography from "../atoms/AtomTypography";
import ButtonSquareStripe from "./ButtonSquareStripe";
import Image from "./Image";

const ItemCard = styled(AtomCard)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  position: "relative",
  transition: "all .2s ease",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    "& .MuiCardContent-root:last-child": {
      paddingBottom: theme.spacing(1),
    },
    "& .description": {
      maxHeight: "250px",
      opacity: 1,
      transition: "max-height 1.5s ease, opacity 1s ease",
      height: "50px",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      WebkitLineClamp: 2,
    },
    "& .content": {
      background:
        "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7)25%)",

      width: "100%",
    },

    "& .action": {
      opacity: 1,
      maxHeight: "100%",
    },
    "& .detailContent": {
      maxHeight: "250px",
      opacity: 1,
      transition: "max-height 1.5s ease, opacity 1s ease",
    },
    "& .caption": {
      color: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.up("md")]: {
    "&::before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background:
        "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%)",
      zIndex: 1,
    },
    "& .detailContent": {
      maxHeight: 0,
      opacity: 0,
      transition: "all 1.5s ease",
    },
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
      transform: "translateY(-4px)",
      cursor: "pointer",
      "& .description": { maxHeight: "250px", opacity: 1, zIndex: 2 },
      "& .content": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100%",
      },
      "& img": {
        transform: "scale(1.2)",
        ObjectFit: "cover",
      },
      "& .action": {
        opacity: 1,
        maxHeight: "100%",
        zIndex: 2,
      },
      "& .detailContent": {
        maxHeight: "250px",
        opacity: 1,
        transition: "max-height 1.5s ease, opacity 1s ease",
      },
      "& .caption": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

const Description = styled(AtomTypography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    maxHeight: 0,
    opacity: 0,
    transition: "max-height 1.5s ease, opacity 1s ease",
    height: "50px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
  },
}));

const CardContent = styled(AtomCardContent)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  color: "white",
  width: "100%",
  /*     background-color: rgba(0, 0, 0, 0.4); */
  transition: "background-color 2s ease",
}));

const Caption = styled(AtomTypography)(({ theme }) => ({
  transition: "color 1s ease",
  color: "#fff",
  zIndex: 2,
}));

const CardAction = styled(AtomCardAction)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    opacity: 0,
    maxHeight: 0,
    transition: "all 1.5s ease",
  },
}));

const CardNewGame = (props) => {
  return (
    <ItemCard elevation={0}>
      <Image src={props.image} alt={props.title} />

      <CardContent className="content">
        <AtomStack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <AtomStack>
            <Caption variant="titleGame" className="caption">
              {props.caption}
            </Caption>
          </AtomStack>
        </AtomStack>
        <AtomStack className="detailContent">
          <Description className="description">{props.description}</Description>
          <CardAction className="action" sx={{ justifyContent: "flex-end" }}>
            <ButtonSquareStripe
              onClick={props.onClick}
              // className="button"
              label="Xem chi tiết"
            >
              {" "}
            </ButtonSquareStripe>
          </CardAction>
        </AtomStack>
      </CardContent>
    </ItemCard>
  );
};

export default CardNewGame;
