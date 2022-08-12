import React from "react";
import AtomButton from "../atoms/AtomButton";
import { styled } from "@mui/material/styles";

const ButtonStyles = styled(AtomButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  width: "auto",
  // maxWidth: "135px",
  padding: theme.spacing(1, 3),
  cursor: "pointer",
  position: "relative",
  textTransform: "none",
  lineHeight: "1.5em",
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.h6.fontSize,
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: theme.typography.h4.fontSize,
  },
  [theme.breakpoints.up("xxxl")]: {
    fontSize: theme.typography.h2.fontSize,
    // borderRadius: theme.spacing(10),
    padding: theme.spacing(2, 10),
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

const ButtonSquareStripe = (props) => {
  return (
    <ButtonStyles onClick={props.onClick}>
      <span>{props.label}</span>
    </ButtonStyles>
  );
};

export default ButtonSquareStripe;
