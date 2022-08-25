import React from "react";
import AtomButton from "../atoms/AtomButton";
import { alpha, styled } from "@mui/material/styles";

const ButtonStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.primary.main,
  width: "auto",
  // maxWidth: "135px",
  padding: theme.spacing(1, 3),
  cursor: "pointer",
  position: "relative",
  textTransform: "none",
  lineHeight: "1.5em",
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
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
