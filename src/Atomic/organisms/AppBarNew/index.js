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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();
  // const { tabBarValue, setTabBarValue } = React.useContext(TabBarContext);
  const [value, setValue] = React.useState(0);
  const navigateTabListgame = (tab, newTab) => {
    // setTabBarValue(newValue);
    setValue(newTab);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AtomBox className={classes.root}>
      <TabAppBar
        value={value}
        navigateTabListgame={navigateTabListgame}
        handleOpenNavMenu={handleOpenNavMenu}
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
