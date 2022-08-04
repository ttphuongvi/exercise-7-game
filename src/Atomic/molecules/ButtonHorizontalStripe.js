import { styled } from "@mui/material/styles";
import React from "react";
import AtomButton from "../atoms/AtomButton";

const ButtonLoadMoreStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.paper,
  cursor: "pointer",
  fontFamily: theme.typography.bodyGame.fontFamily,
  fontSize: theme.typography.subtitle1.fontSize,
  lineHeight: "1em",
  padding: theme.spacing(2, 6),
  // position: "relative",
  textTransform: "uppercase",
  "&:before, &:after": {
    borderColor: "transparent",
    webkitTransition: "all 0.25s",
    transition: "all 0.25s",
    borderStyle: "solid",
    borderWidth: 0,
    content: "''",
    height: theme.spacing(3),
    position: "absolute",
    width: theme.spacing(3),
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
}));

const HorizonetalStripeButton = (props) => {
  return (
    <ButtonLoadMoreStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonLoadMoreStyles>
  );
};

export default HorizonetalStripeButton;
