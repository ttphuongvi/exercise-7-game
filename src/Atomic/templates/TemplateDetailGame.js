import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitleCatogery from "../molecules/TitleCategory";
import AtomCard from "../atoms/AtomCard";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomCardAction from "../atoms/AtomCardAction";

const useStyles = makeStyles({
  titleCatogery: {
    margin: "0 auto",
    width: "60%",
  },
  action: {
    justifyContent: "center",
  },
});

const TemplateDetailGame = (props) => {
  const classes = useStyles();

  return (
    <div>
      <TitleCatogery className={classes.titleCatogery} title="Chi tiết game">
        <AtomCard elevation={5} className={classes.card}>
          {props.image}

          <AtomCardContent>
            {" "}
            {props.caption}
            {props.release}
            {props.description}
          </AtomCardContent>
          <AtomCardAction className={classes.action}>
            {props.dialogPlayGame}
          </AtomCardAction>
        </AtomCard>
      </TitleCatogery>
    </div>
  );
};

export default TemplateDetailGame;
