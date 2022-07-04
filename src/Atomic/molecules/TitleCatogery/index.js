import React from "react";
import AtomPaper from "../../atoms/AtomPaper";
import AtomTypography from "../../atoms/AtomTypography";
import AtomBox from "../../atoms/AtomBox";
import useStyles from "./styles";

const TitleCatogery = (props) => {
  const classes = useStyles();

  return (
    <AtomPaper elevation={7} className={classes.titleCatogery}>
      <div className={classes.header}>
        <AtomTypography className={classes.typography} variant="h5">
          <AtomBox fontWeight={500} m={1}>
            {" "}
            <span>HAHALOLO // </span>
            {props.title}
          </AtomBox>
        </AtomTypography>
      </div>
      {props.children}
    </AtomPaper>
  );
};
export default TitleCatogery;
