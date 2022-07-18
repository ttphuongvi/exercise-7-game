import React from "react";
import RoutesGame from "./routesGame/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { createTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";
// import setTheme from "./theme";
import { CssBaseline } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import AtomIconButton from "./Atomic/atoms/AtomIconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AtomSettingIcon from "./Atomic/atoms/AtomSettingIcon";
import AtomMenu from "./Atomic/atoms/AtomMenu";
import AtomMenuItem from "./Atomic/atoms/AtomMenuItem";
import AtomTypography from "./Atomic/atoms/AtomTypography";
import { makeStyles } from "@material-ui/core/styles";
const store = configureStore({ reducer: reducers });
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles((theme) => ({
  iconButton: {
    color: theme.palette.text.secondary,
  },
}));

export const IconSetting = () => {
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const classes = useStyles();
  // const [mode, setMode] = useState("light");
  return (
    <>
      <AtomIconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenSettingMenu}
        className={classes.iconButton}
      >
        <AtomSettingIcon />
      </AtomIconButton>
      <AtomMenu
        sx={{ mt: "45px" }}
        id="simple-menu"
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
        onClose={handleCloseSettingMenu}
      >
        <AtomMenuItem>
          {/* CHẾ ĐỘ
          {theme.palette.mode}
          <AtomIconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </AtomIconButton> */}
          Chế độ {theme.palette.mode}
          <AtomIconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </AtomIconButton>
        </AtomMenuItem>
        <AtomMenuItem onClick={handleCloseSettingMenu}>
          <AtomTypography textalign="center">CHỌN CHỦ ĐỀ</AtomTypography>
        </AtomMenuItem>
      </AtomMenu>
    </>
  );
};

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#2AC0FF",
          },
          secondary: {
            ...(mode === "dark"
              ? {
                  main: "#2ac0ff",
                }
              : {
                  main: "#20232A",
                }),
          },
          ...(mode === "dark"
            ? {
                background: {
                  default: grey[900],
                  paper: "#20232A",
                },
              }
            : {
                background: {
                  default: "#fff",
                  paper: "#fff",
                },
              }),

          text: {
            ...(mode === "light"
              ? {
                  primary: grey[800],
                  secondary: grey[800],
                }
              : {
                  primary: grey[300],
                  secondary: grey[300],
                }),
          },
        },
        shadows: [
          "none",
          "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
          "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          "0px 2px 4px rgba(0, 0, 0, 0.25)",
          ...Array(21).fill("none"),
        ],
      }),
    [mode]
  );
  // const [tabBarValue, setTabBarValue] = React.useState(0);
  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RoutesGame />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
};

export default App;
