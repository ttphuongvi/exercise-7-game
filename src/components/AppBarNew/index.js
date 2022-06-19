import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import "./styles.css";
import Tabs from "@material-ui/core/Tabs";
import TabPanel from "../TabPanel";
import Tab from "@material-ui/core/Tab";
import Home from "../../screens/Home/index";
import ListGame from "../../screens/ListGame/index";
import Contact from "../../screens/Contact/index";
import { TabBarContext } from "../../context/TabBarContext";
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
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
  const { tabBarValue, setTabBarValue } = React.useContext(TabBarContext);

  const handleChange = (event, newValue) => {
    setTabBarValue(newValue);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container className="appbar__container" maxWidth="xl">
          <Toolbar className="appbar__toolbar" disableGutters>
            <img
              className="img__logo"
              alt="logo"
              src="https://assets.topdev.vn/images/2022/03/08/TopDev-hahalolo-logo-1646710802.png"
            ></img>
            <div className="div__container-menu-and-avatar">
              <Tabs
                value={tabBarValue}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="TRANG CHỦ" {...a11yProps(0)} />
                <Tab label="DANH SÁCH GAME" {...a11yProps(1)} />
                <Tab label="LIÊN HỆ" {...a11yProps(2)} />
              </Tabs>

              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      className="avatar--margin"
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <TabPanel value={tabBarValue} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={tabBarValue} index={1}>
        <ListGame />
      </TabPanel>
      <TabPanel value={tabBarValue} index={2}>
        <Contact />
      </TabPanel>
    </div>
  );
};
export default ResponsiveAppBar;
