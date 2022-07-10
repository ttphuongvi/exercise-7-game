import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabPanel from "../../molecules/TabPanel";
import Home from "../../pages/Home/index";
import ListGame from "../../pages/ListGame/index";
import Contact from "../../pages/Contact/index";
import TabAppBar from "../../molecules/TabAppBar";
import AtomBox from "../../atoms/AtomBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <TabPanel value={value} index={0}>
        <Home navigateTabListgame={navigateTabListgame} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListGame />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Contact />
      </TabPanel>
    </AtomBox>
  );
};
export default ResponsiveAppBar;
