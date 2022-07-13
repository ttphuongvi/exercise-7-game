import React from "react";
import Footer from "../organisms/Footer/index";
import AppBarNew from "../organisms/AppBarNew/index";
import AtomBox from "../atoms/AtomBox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
  },
});

const Container = () => {
  const classes = useStyles();
  return (
    <AtomBox className={classes.container}>
      <AppBarNew />
      <Footer />
    </AtomBox>
  );
};

export default Container;
