import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitleCatogery from "../molecules/TitleCatogery";
import AtomBox from "../atoms/AtomBox";
import AtomCard from "../atoms/AtomCard";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardAction from "../atoms/AtomCardAction";
import DivFlexColumn from "./TemplateTag/DivFlexColumn";

const useStyles = makeStyles({
  marginTitleCatogery: {
    marginTop: "100px",
    width: "50%",
    margin: "0 auto",
  },
  alignment: {
    alignItems: "center",
  },
});

const TemplateContact = (props) => {
  const classes = useStyles();
  return (
    <TitleCatogery className={classes.marginTitleCatogery} title="Liên hệ">
      <DivFlexColumn className={classes.alignment}>
        {props.name}
        {props.title}
        {props.content}
        {props.button}
      </DivFlexColumn>
    </TitleCatogery>
  );
};

export default TemplateContact;
