import React from "react";
import TitleCatogery from "../molecules/TitleCatogery";
import { makeStyles } from "@material-ui/core/styles";
import DivFlexRow from "../templates/TemplateTag/DivFlexRow";

const useStyles = makeStyles({
  marginTitleCatogery: {
    marginTop: "100px",
  },
  alignment: {
    justifyContent: "space-between",
    marginBottom: "20px",
  },
});
const TemplateListGame = (props) => {
  const classes = useStyles();
  return (
    <TitleCatogery
      className={classes.marginTitleCatogery}
      title="DANH SÁCH GAME"
    >
      <DivFlexRow className={classes.alignment}>
        <DivFlexRow>
          {props.searchByName}
          {props.searchByYear}
        </DivFlexRow>
        {props.dialogCreateGame}
      </DivFlexRow>
      {props.gridListGame}
    </TitleCatogery>
  );
};

export default TemplateListGame;
