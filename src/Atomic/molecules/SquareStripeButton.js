import React from "react";
import AtomButton from "../atoms/AtomButton";
import { styled } from "@mui/material/styles";

const ButtonStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  width: "auto",
  height: "40px",
  boderRadius: "5px",
  padding: "10px 25px",
  cursor: "pointer",
  position: "relative",
  boxShadow:
    "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)",
  outline: "none",
  textTransform: "none",
  lineHeight: "1.5em",

  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&:before, &:after": {
    content: "''",
    position: "absolute",
    top: 0,
    right: 0,
    height: "2px",
    width: 0,
    background: theme.palette.primary.main,
    transition: "400ms ease all",
  },
  "&:after": { right: "inherit", top: "inherit", left: 0, bottom: 0 },
  "&:hover:before, &:hover:after": {
    width: "100%",
    transition: "800ms ease all",
  },
}));

const SquareStripeButton = (props) => {
  return (
    <ButtonStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonStyles>
  );
};

export default SquareStripeButton;
