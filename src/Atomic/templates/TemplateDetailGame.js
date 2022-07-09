import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TitleCatogery from "../molecules/TitleCatogery";
import AtomCard from "../atoms/AtomCard";
import AtomCardContent from "../atoms/AtomCardContent";
import TabAppBar from "../molecules/TabAppBar";
import AtomCardAction from "../atoms/AtomCardAction";

const useStyles = makeStyles({
  containerDetailGame: {
    width: "50%",
    background: "#fff",
    border: "3px solid #25394a",
    borderRadius: "10px",
    margin: "10px 0px 30px 10px",
    // -webkit-box-shadow: '0px 2px 5px 2px rgb(0 0 0 / 50%)',
    boxShadow: "0px 2px 5px 2px rgb(0 0 0 / 50%)",
    position: "relative",
  },
  titleCatogery: {
    margin: "70px auto 0px auto",
    width: "60%",
  },
  card: {
    // boxShadow: "none",
  },
  action: {
    justifyContent: "center",
  },
});

const TemplateDetailGame = (props) => {
  const classes = useStyles();

  return (
    <div>
      <TabAppBar />
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
