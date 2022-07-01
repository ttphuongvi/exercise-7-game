import React from "react";
import AtomButton from "../../atoms/AtomButton";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import clsx from "clsx";

const ButtonStyle1 = (props) => {
  const classes = useStyles();
  const { customButton, button3 } = classes;
  const styleButton = clsx(customButton, button3);
  return (
    <AtomButton onClick={props.onClick} className={styleButton}>
      <span>{props.label}</span>
    </AtomButton>
  );
};

export default ButtonStyle1;
