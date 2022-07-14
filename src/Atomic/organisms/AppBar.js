import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AtomBox from "../atoms/AtomBox";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../store/const";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomContainer from "../atoms/AtomContainer";
import AtomToolBar from "../atoms/AtomToolbar";
import ImageLogo from "../molecules/ImageLogo";
import DivFlexRow from "../molecules/DivFlexRow";
import AtomTabs from "../atoms/AtomTabs";
import dataRoutes from "../../routesGame/dataRoutes";
import AtomRouteLink from "../atoms/AtomRouteLink";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import { CssBaseline, Switch } from "@material-ui/core";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomTypography from "../atoms/AtomTypography";
import AtomAvatar from "../atoms/AtomAvatar";
import logo from "../../img/hahalolo-logo-1.png";
import DialogLogin from "../molecules/DialogLogin";
import DialogSignUp from "../molecules/DialogSignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "84px",
  },
  tabpanel: {
    minHeight: "100vh",
  },
  tab: {
    minWidth: "auto",
    fontFamily: "'Oswald', sans-serif",
  },
  appbar: {
    // backgroundColor: "#20232a",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  toolbar: {
    justifyContent: "space-between",
    padding: "0px",
  },
  menuRight: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
const ResponsiveAppBar = () => {
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();

  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const user = useSelector((state) => state.user.content);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    handleCloseUserMenu();
  };

  const [mode, setMode] = useState("light");

  return (
    <AtomBox className={classes.root}>
      {/* <TabAppBar
        value={value}
        navigateTabListgame={navigateTabListgame}
      ></TabAppBar> */}
      <AtomAppBar color="primary" className={classes.appbar} position="fixed">
        <AtomContainer maxWidth="xl">
          <AtomToolBar className={classes.toolbar}>
            <ImageLogo alt="logo" src={logo}></ImageLogo>
            <DivFlexRow className={classes.menuRight}>
              <AtomTabs>
                {dataRoutes.map((route, index) => {
                  return (
                    <AtomRouteLink key={index} to={route.path}>
                      {route.name}
                    </AtomRouteLink>
                  );
                })}
              </AtomTabs>
              <AtomBox sx={{ flexGrow: 0 }}>
                <AtomIconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenSettingMenu}
                  color="inherit"
                >
                  <AtomSettingIcon />
                </AtomIconButton>
                <CssBaseline />

                <AtomBox
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <AtomMenu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElSetting}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElSetting)}
                    onClose={handleCloseUserMenu}
                  >
                    <AtomMenuItem>
                      CHẾ ĐỘ TỐI
                      <Switch
                        onChange={() =>
                          setMode(mode === "dark" ? "light" : "dark")
                        }
                        onClick={handleCloseSettingMenu}
                      />
                    </AtomMenuItem>
                    <AtomMenuItem onClick={handleCloseSettingMenu}>
                      <AtomTypography textalign="center">
                        CHỌN CHỦ ĐỀ
                      </AtomTypography>
                    </AtomMenuItem>
                  </AtomMenu>
                </AtomBox>
              </AtomBox>
              {user && user.isLogin ? (
                <AtomBox>
                  <AtomIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AtomAvatar
                      className="avatar--margin"
                      src="/broken-image.jpg"
                    />
                  </AtomIconButton>
                  <AtomMenu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <AtomMenuItem onClick={handleLogout}>
                      ĐĂNG XUẤT
                    </AtomMenuItem>
                  </AtomMenu>
                </AtomBox>
              ) : (
                <DivFlexRow>
                  <DialogLogin /> / <DialogSignUp />
                </DivFlexRow>
              )}
            </DivFlexRow>
          </AtomToolBar>
        </AtomContainer>
      </AtomAppBar>
    </AtomBox>
  );
};
export default ResponsiveAppBar;
