import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AtomAppBar from "../../atoms/AtomAppBar";
import AtomToolbar from "../../atoms/AtomToolbar";
import AtomBox from "../../atoms/AtomBox";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomContainer from "../../atoms/AtomContainer";
import AtomTooltip from "../../atoms/AtomTooltip";
import AtomAvatar from "../../atoms/AtomAvatar";
import AtomSettingIcon from "../../atoms/AtomSettingIcon";
import "./styles.css";
import AtomTabs from "../../atoms/AtomTabs";
import TabPanel from "../../molecules/TabPanel";
import Tab from "@material-ui/core/Tab";
import Home from "../../pages/Home/index";
import ListGame from "../../pages/ListGame/index";
import Contact from "../../pages/Contact/index";
import logo from "../../../img/hahalolo-logo-1.png";
import styled, { ThemeProvider } from "styled-components";
import Category from "../../pages/Category";
// import { TabBarContext } from "../../context/TabBarContext";
import FormLogin from "../Login/index";
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
        <AtomAppBar position="fixed">
          <AtomContainer className="appbar__container" maxWidth="xl">
            <AtomToolbar className="appbar__toolbar">
              <img className="img__logo" alt="logo" src={logo}></img>
              <div className="div__container-menu-and-avatar">
                <AtomTabs
                  // value={tabBarValue}
                  value={value}
                  onChange={navigateTabListgame}
                  ariaLabel="simple tabs example"
                >
                  <Tab label="TRANG CHỦ" {...a11yProps(0)} />
                  <Tab label="DANH SÁCH GAME" {...a11yProps(1)} />
                  <Tab label="DANH MỤC" {...a11yProps(2)} />
                  <Tab label="LIÊN HỆ" {...a11yProps(3)} />
                </AtomTabs>

                <AtomBox sx={{ flexGrow: 0 }}>
                  <AtomIconButton
                    size="large"
                    ariaLabel-="account of current user"
                    ariaControls="menu-appbar"
                    ariaHaspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <AtomSettingIcon />
                  </AtomIconButton>
                  <AtomTooltip title="Open settings">
                    <AtomIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AtomAvatar
                        className="avatar--margin"
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </AtomIconButton>
                  </AtomTooltip>
                </AtomBox>
                <FormLogin />
              </div>
            </AtomToolbar>
          </AtomContainer>
        </AtomAppBar>
        {/* <Routes>
        <Route
          path="/"
          element={
            <> */}
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

        {/* </>
          }
        />
      </Routes> */}
      </div>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
