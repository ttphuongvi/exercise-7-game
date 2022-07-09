import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import DivFlexRow from "../templates/TemplateTag/DivFlexRow";
import { makeStyles } from "@material-ui/core/styles";

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
    <DivFlexRow className={classes.container}>
      {props.icon}
      <AtomTypography className={classes.typography}>
        {props.info}
      </AtomTypography>
    </DivFlexRow>
  );
};

export default InfoFooter;
