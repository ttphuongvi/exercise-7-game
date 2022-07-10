import React, { useEffect, useMemo, useState } from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBox from "../atoms/AtomBox";
import AtomContainer from "../atoms/AtomContainer";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import AtomTab from "../atoms/AtomTab";
import AtomTabs from "../atoms/AtomTabs";
import AtomToolbar from "../atoms/AtomToolbar";
import Login from "./Login";
import SignUp from "./SignUp";
import logo from "../../img/hahalolo-logo-1.png";
import DivFlexRow from "../templates/TemplateTag/DivFlexRow";
import { makeStyles } from "@material-ui/core/styles";
import ImageLogo from "../templates/TemplateTag/ImageLogo";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomTypography from "../atoms/AtomTypography";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/const";
import { Switch } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
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
});

const TabAppBar = (props) => {
  // const theme = useTheme();

  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const classes = useStyles();

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

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

  useEffect(() => {
    console.log(user);
  }, [user]);

  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          primary: {
            main: "#20232a",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AtomAppBar color="primary" className={classes.appbar} position="fixed">
        <AtomContainer maxWidth="xl">
          <AtomToolbar className={classes.toolbar}>
            <ImageLogo alt="logo" src={logo}></ImageLogo>
            <DivFlexRow className={classes.menuRight}>
              <AtomTabs
                TabIndicatorProps={{ style: { background: "#2ac0ff" } }}
                // value={tabBarValue}
                value={props.value}
                onChange={props.navigateTabListgame}
                aria-label="simple tabs "
              >
                <AtomTab
                  className={classes.tab}
                  label="TRANG CHỦ"
                  {...a11yProps(0)}
                />
                <AtomTab
                  className={classes.tab}
                  label="DANH SÁCH GAME"
                  {...a11yProps(1)}
                />
                <AtomTab
                  className={classes.tab}
                  label="LIÊN HỆ"
                  {...a11yProps(2)}
                />
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
                <Switch
                  onChange={() => setMode(mode === "light" ? "dark" : "light")}
                />
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
                    <AtomMenuItem
                    // onChange={() =>
                    //   setMode(mode === "light" ? "dark" : "light")
                    // }
                    // onClick={handleCloseSettingMenu}
                    >
                      CHẾ ĐỘ TỐI
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
                  <Login /> / <SignUp />
                </DivFlexRow>
              )}
            </DivFlexRow>
          </AtomToolbar>
        </AtomContainer>
      </AtomAppBar>
    </ThemeProvider>
  );
};

export default TabAppBar;
