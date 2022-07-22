import React from "react";
import RoutesGame from "./routesGame/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import { styled, ThemeProvider, useTheme } from "@mui/material/styles";
// import setTheme from "./theme";
import { CssBaseline } from "@mui/material";
import AtomIconButton from "./Atomic/atoms/AtomIconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AtomSettingIcon from "./Atomic/atoms/AtomSettingIcon";
import AtomMenu from "./Atomic/atoms/AtomMenu";
import AtomMenuItem from "./Atomic/atoms/AtomMenuItem";
import AtomTypography from "./Atomic/atoms/AtomTypography";
import useCustomTheme from "./CustomTheme";
import { AppContext } from "./context/context";
// import AtomBox from "./Atomic/atoms/AtomBox";
// import theme from "./theme";
// // import theme from "./theme";
const store = configureStore({ reducer: reducers });
// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const IconButtonStyles = styled(AtomIconButton)(
  ({ theme }) => `
  color: ${theme.palette.text.primary};
`
);

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

  // const [mode, setMode] = useState("light");
  return (
    <>
      <IconButtonStyles
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenSettingMenu}
      >
        <AtomSettingIcon />
      </IconButtonStyles>
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
          Chế độ {theme.palette.mode === "dark" ? "tối" : "sáng"}
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
          <AtomTypography textalign="center">Chọn chủ đề</AtomTypography>
        </AtomMenuItem>
      </AtomMenu>
    </>
  );
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  // const [mode, setMode] = React.useState("light");
  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //     },
  //   }),
  //   []
  // );

  const appContext = React.useContext(AppContext);

  const { darkMode, customTheme } = appContext;

  const theme = useCustomTheme(darkMode, customTheme);

  return (
    <Provider store={store}>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesGame />
      </ThemeProvider>
      {/* </ColorModeContext.Provider> */}
    </Provider>
  );
};
export default App;
