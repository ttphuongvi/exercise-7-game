import React from "react";
import AtomButton from "../atoms/AtomButton";
import { styled } from "@mui/material/styles";

const ButtonStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: "#d32f2f",
  color: "#fff",
  width: "auto",
  // maxWidth: "135px",
  padding: theme.spacing(1, 3),
  cursor: "pointer",
  position: "relative",
  textTransform: "none",
  lineHeight: "1.5em",
  border: `1px solid #d32f2f`,
  "&:hover": {
    color: "#d32f2f",
    // backgroundColor: "transparent",
    // boxShadow: "none",
    // border: `1px solid #d32f2f`,
  },

  // "&:before, &:after": {
  //   content: "''",
  //   position: "absolute",
  //   top: 0,
  //   right: 0,
  //   height: "2px",
  //   width: 0,
  //   background: theme.palette.primary.main,
  //   transition: "400ms ease all",
  // },
  // "&:after": { right: "inherit", top: "inherit", left: 0, bottom: 0 },
  // "&:hover:before, &:hover:after": {
  //   width: "100%",
  //   transition: "800ms ease all",
  // },
}));

const ButtonCancel = (props) => {
  return (
    <ButtonStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonStyles>
  );
};

export default ButtonCancel;
