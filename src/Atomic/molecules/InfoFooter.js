import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import { makeStyles } from "@material-ui/core/styles";
import AtomGrid from "../atoms/AtomGrid";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },
  typography: {
    marginLeft: theme.spacing(1),
    fontFamily: "Oswald",
    fontWeight: "400",
  },
}));

const InfoFooter = (props) => {
  const classes = useStyles();

  return (
    <AtomGrid container alignItems="center" className={classes.container}>
      {props.icon}
      <AtomTypography className={classes.typography}>
        {props.info}
      </AtomTypography>
    </AtomGrid>
  );
};

export default InfoFooter;
