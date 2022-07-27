import { styled } from "@mui/material/styles";
import React from "react";
import AtomButton from "../atoms/AtomButton";

const ButtonLoadMoreStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: theme.typography.titleGame.fontFamily,
  fontSize: "1em",
  width: "200px",
  lineHeight: "1em",
  outline: "none",
  padding: "12px 40px 10px",
  position: "relative",
  textTransform: "uppercase",
  fonWeight: 700,
  "&:before, &:after": {
    borderColor: "transparent",
    webkitTransition: "all 0.25s",
    transition: "all 0.25s",
    borderStyle: "solid",
    borderWidth: 0,
    content: "''",
    height: "24px",
    position: "absolute",
    width: "24px",
  },
  "&:before": {
    borderColor: theme.palette.primary.main,
    borderTopWidth: "2px",
    left: "0px",
    top: "-5px",
  },
  "&:after": {
    borderColor: theme.palette.primary.main,
    borderBottomWidth: "2px",
    right: "0px",
    bottom: "-5px",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    "&:before": {
      height: "100%",
      width: "100%",
    },
    "&:after": {
      height: "100%",
      width: "100%",
    },
  },

  "& label": {
    position: "relative",
    paddingRight: 0,
    transition: "padding-right 0.5s",
    color: "#363858",
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200,
  },
}));

const HorizonetalStripeButton = (props) => {
  return (
    <ButtonLoadMoreStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonLoadMoreStyles>
  );
};

export default HorizonetalStripeButton;
