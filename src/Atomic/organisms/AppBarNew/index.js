import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabPanel from "../../molecules/TabPanel";
import Home from "../../../pages/Home/index";
import ListGame from "../../../pages/ListGame/index";
import Contact from "../../../pages/Contact/index";
import TabAppBar from "../../molecules/TabAppBar";
import AtomBox from "../../atoms/AtomBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabpanel: {
    minHeight: "100vh",
  },
}));
const ResponsiveAppBar = () => {
  const classes = useStyles();
  // const { tabBarValue, setTabBarValue } = React.useContext(TabBarContext);
  const [value, setValue] = React.useState(0);
  const navigateTabListgame = (tab, newTab) => {
    // setTabBarValue(newValue);
    setValue(newTab);
  };

  return (
    <AtomBox className={classes.root}>
      <TabAppBar
        value={value}
        navigateTabListgame={navigateTabListgame}
      ></TabAppBar>
    </AtomBox>
  );
};
export default ResponsiveAppBar;
