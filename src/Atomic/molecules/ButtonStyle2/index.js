import React from "react";
import AtomButton from "../../atoms/AtomButton";
import useStyles from "./styles";

const ButtonStyle2 = (props) => {
  const classes = useStyles();
  return (
    <AtomButton className={classes.button1} onClick={props.onClick}>
      <span className={classes.label}>{props.label}</span>
    </AtomButton>
  );
};

export default ButtonStyle2;
