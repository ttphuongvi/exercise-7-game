import React from "react";
import AtomButton from "../../atoms/AtomButton";
import useStyles from "./styles";
import clsx from "clsx";

const ButtonStyle1 = (props) => {
  const classes = useStyles();
  const { customButton, button } = classes;
  const styleButton = clsx(customButton, button);
  return (
    <AtomButton onClick={props.onClick} className={styleButton}>
      <span>{props.label}</span>
    </AtomButton>
  );
};

export default ButtonStyle1;
