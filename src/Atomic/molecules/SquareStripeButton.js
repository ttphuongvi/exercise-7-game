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
  fontFamily: "Lato, sans-serif",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  display: "inline-block",
  boxShadow:
    "inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)",
  outline: "none",
  textTransform: "none",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.main}`,
    transition: "0.5s",
    background: "transparent",
    boxShadow: "none",
  },
}));

const ButtonStyle1 = (props) => {
  return (
    <ButtonStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonStyles>
  );
};

export default ButtonStyle1;
