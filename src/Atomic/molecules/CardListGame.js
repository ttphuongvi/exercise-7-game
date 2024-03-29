import { styled } from "@mui/material/styles";
import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomCard from "../atoms/AtomCard";
import AtomCardAction from "../atoms/AtomCardAction";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomStack from "../atoms/AtomStack";
import AtomTypography from "../atoms/AtomTypography";
import ButtonEditCard from "./ButtonEditCard";
import CaptionGame from "./CaptionGame";
import DialogPlayGame from "./DialogFullWidth/DialogPlayGame";
import Image from "./Image";

const CardStyles = styled(AtomCard)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  transition: "all .2s ease",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    "& .overlay": {
      transition: "opacity .2s ease",
      opacity: 0,
    },
    "&:hover": {
      cursor: "pointer",
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
      transform: "translateY(-4px)",
      "& .overlay": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        transition: "opacity .2s ease",
        opacity: 1,
        aspectRatio: "4/3",
      },
      "& .cardContent": {
        boxShadow: `inset 0 3px 0 0 ${theme.palette.primary.main}`,
      },
    },
  },
}));

const DescriptionGame = styled(AtomTypography)({
  height: "72px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  WebkitLineClamp: 3,
});

const CardListGame = (props) => {
  return (
    <CardStyles elevation={0} onClick={props.onClick}>
      <Image ratio={4 / 3} src={props.image} />
      <AtomBox
        sx={{
          position: "absolute",
          top: "0",
          width: "100%",
        }}
        className="overlay"
      >
        <AtomCardAction
          className="overlay content"
          sx={{
            justifyContent: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          <DialogPlayGame
            caption={props.caption}
            link={props.link || "https://codepen.io/HunorMarton/full/xxOMQKg"}
          />
        </AtomCardAction>
      </AtomBox>
      <AtomCardContent className="cardContent">
        <AtomStack spacing={1}>
          <AtomStack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <AtomStack spacing={1}>
              <CaptionGame>{props.caption}</CaptionGame>
              <AtomTypography variant="body2">{props.release}</AtomTypography>
            </AtomStack>

            <ButtonEditCard
              id={props.id}
              image={props.image}
              caption={props.caption}
              release={props.release}
              link={props.link}
              description={props.description}
              // handleRemove={props.handleRemove}
            />
          </AtomStack>

          <DescriptionGame>{props.description}</DescriptionGame>
        </AtomStack>
      </AtomCardContent>
      <AtomCardAction
        // className="overlay content"
        sx={{
          justifyContent: "center",

          display: { xs: "flex", md: "none" },
        }}
      >
        <DialogPlayGame
          caption={props.caption}
          link={props.link || "https://codepen.io/HunorMarton/full/xxOMQKg"}
        />
      </AtomCardAction>
    </CardStyles>
  );
};

export default CardListGame;
