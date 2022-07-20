import React from "react";
import RoutesGame from "./routesGame/index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./store/reducers";
import {
  createTheme,
  styled,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
// import setTheme from "./theme";
import { CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import AtomIconButton from "./Atomic/atoms/AtomIconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AtomSettingIcon from "./Atomic/atoms/AtomSettingIcon";
import AtomMenu from "./Atomic/atoms/AtomMenu";
import AtomMenuItem from "./Atomic/atoms/AtomMenuItem";
import AtomTypography from "./Atomic/atoms/AtomTypography";
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
          // mode,
          mode,
          primary: {
            main: "#2AC0FF",
          },

          // ...(mode === "dark"
          //   ? {
          //       background: {
          //         default: grey[900],
          //         paper: "#333",
          //       },
          //     }
          //   : {
          //       background: {
          //         default: "#fff",
          //         paper: "#F5F5F5",
          //       },
          //     }),
        },
        // shadows: [
        //   "none",
        //   "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
        //   "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        //   "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        //   ...Array(21).fill("none"),
        // ],
        typography: {
          subtitle1: {
            fontSize: "1.2rem",
            fontFamily: "Oswald",
          },
          caption: {
            fontSize: "0.8rem",
          },
        },
      }),
    [mode]
  );

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
