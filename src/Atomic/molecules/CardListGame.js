import { styled } from "@mui/material/styles";
import React from "react";
import AtomCard from "../atoms/AtomCard";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardMedia from "../atoms/AtomCardMedia";
import AtomStack from "../atoms/AtomStack";
import DialogPlayGame from "./DialogFullWidth/DialogPlayGame";
import AtomTypography from "../atoms/AtomTypography";
import ButtonEditCard from "./ButtonEditCard";

const ItemCard = styled(AtomCard)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "250px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "300px",
  },
  [theme.breakpoints.up("xxl")]: {
    height: "500px",
  },
  transition: "opacity .2s ease",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background:
      "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%)",
    zIndex: 0,
  },

  "& .detailContent": {
    maxHeight: 0,
    opacity: 0,
    transition: "max-height 1.5s ease, opacity 1s ease",
  },
  "&:hover": {
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
    cursor: "pointer",
    "& .description": { maxHeight: "250px", opacity: 1 },
    "& .content": { backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%" },
    "& .img": {
      transform: "scale(1.2)",
      zIndex: -1,
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
}));

const CardMediaStyle = styled(AtomCardMedia)(({ theme }) => ({
  transition: "transform 3s ease",
  [theme.breakpoints.up("sm")]: {
    height: "250px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "300px",
  },
  [theme.breakpoints.up("xxl")]: {
    height: "500px",
  },
  // transition: "opacity .2s ease",
}));

const Description = styled(AtomTypography)(({ theme }) => ({
  maxHeight: 0,
  opacity: 0,
  transition: "max-height 1.5s ease, opacity 1s ease",
  height: "50px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  WebkitLineClamp: 2,
}));

const CardContent = styled(AtomCardContent)({
  position: "absolute",
  bottom: 0,
  color: "white",
  width: "100%",
  /*     background-color: rgba(0, 0, 0, 0.4); */
  transition: "background-color 2s ease",
});

const Caption = styled(AtomTypography)(({ theme }) => ({
  transition: "color 1s ease",
  color: "#fff",
}));

const CardAction = styled(AtomCardAction)(({ theme }) => ({
  opacity: 0,
  maxHeight: 0,
  transition: "max-height 1.5s ease, opacity 1s ease",
}));

const CardListGame = (props) => {
  return (
    <ItemCard elevation={0} onClick={props.onClick}>
      <CardMediaStyle
        className="img"
        component="img"
        image={props.image}
        title={props.title}
        onError={(e) => {
          const imgDefault = "/images/default.jpg";

          e.target.src = imgDefault;
        }}
        // sx={{ height: "250px" }}
      ></CardMediaStyle>

      <CardContent className="content">
        <AtomStack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <AtomStack spacing={1}>
            <Caption variant="titleGame" className="caption">
              {props.caption}
            </Caption>
            <AtomTypography variant="body2">{props.subheader}</AtomTypography>
          </AtomStack>
          <ButtonEditCard />
        </AtomStack>
        <AtomStack className="detailContent">
          <Description className="description">{props.description}</Description>
          <CardAction className="action" sx={{ justifyContent: "flex-end" }}>
            <DialogPlayGame
              caption={props.caption}
              link={props.link || "https://codepen.io/HunorMarton/full/xxOMQKg"}
            />
          </CardAction>
        </AtomStack>
      </CardContent>
    </ItemCard>
  );
};

export default CardListGame;
