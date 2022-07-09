import React from "react";
import AtomPaper from "../../atoms/AtomPaper";
import AtomTypography from "../../atoms/AtomTypography";
import AtomBox from "../../atoms/AtomBox";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const TitleCatogery = (props) => {
  const classes = useStyles();

  return (
    <div className={props.className}>
      <AtomPaper elevation={3} className={classes.titleCatogery}>
        <div className={classes.header}>
          <AtomTypography className={classes.typography} variant="h5">
            <AtomBox fontWeight={500} m={1}>
              {" "}
              <Link to="/">
                <span>HAHALOLO // </span>
              </Link>
              {props.title}
            </AtomBox>
          </AtomTypography>
        </div>
        {props.children}
      </AtomPaper>
    </div>
  );
};
export default TitleCatogery;
