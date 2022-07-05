import React from "react";
import TitleCatogery from "../molecules/TitleCatogery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  marginTitleCatogery: {
    marginTop: "100px",
  },
});
const TemplateListGame = (props) => {
  const classes = useStyles();
  return (
    <TitleCatogery
      className={classes.marginTitleCatogery}
      title="DANH SÁCH GAME"
    >
      <div className="div__ListGame">
        <section className="sec-1 flex--row flex--spacebetween">
          <div className="search flex--row search__input">
            {props.searchByName}
            {props.searchByYear}
          </div>
          {props.dialogCreateGame}
        </section>
        {props.gridListGame}
      </div>
    </TitleCatogery>
  );
};

export default TemplateListGame;
