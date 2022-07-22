import { styled } from "@mui/material/styles";
import React from "react";
import AtomButton from "../atoms/AtomButton";

const ButtonLoadMoreStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: "#2ac0ff",
  border: "none",
  color: "#ffffff",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: '"Oswald", sans-serif',
  fontSize: "1em",
  /* font-size: 22px; */
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
    borderColor: "#2ac0ff",
    borderTopWidth: "2px",
    left: "0px",
    top: "-5px",
  },
  "&:after": {
    borderColor: "#2ac0ff",
    borderBottomWidth: "2px",
    right: "0px",
    bottom: "-5px",
  },
  "&:hover": {
    backgroundColor: "#2ac0ff",
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

const ButtonLoadMore = (props) => {
  return (
    <ButtonLoadMoreStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonLoadMoreStyles>
  );
};

export default ButtonLoadMore;
