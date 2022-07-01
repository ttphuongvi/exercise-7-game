import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import TabPanel from "../../molecules/TabPanel";
import Home from "../../pages/Home/index";
import ListGame from "../../pages/ListGame/index";
import Contact from "../../pages/Contact/index";
import { ThemeProvider } from "styled-components";
import Category from "../../pages/Category";
import TabAppBar from "../../molecules/TabAppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
    <ThemeProvider theme={{ theme: "light" }}>
      <div className={classes.root}>
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
          <Category />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Contact />
        </TabPanel>
      </div>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
