import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import AtomTypography from "../atoms/AtomTypography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppContext } from "../../context/context";
import AtomButton from "../atoms/AtomButton";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const IconSetting = (props) => {
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  // const colorMode = React.useContext(props.ColorModeContext);

  const { darkMode, changeDarkMode } = React.useContext(AppContext);

  // const [mode, setMode] = useState("light");
  return (
    <>
      <AtomIconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenSettingMenu}
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
          {/* <AtomBox
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
              color: "text.primary",
              borderRadius: 1,
              p: 3,
            }}
          > */}

          <AtomButton
            fullWidth
            color="inherit"
            startIcon={darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            onClick={() => changeDarkMode()}
          >
            Chế độ {darkMode ? "tối" : "sáng"}
          </AtomButton>
          {/* </AtomBox> */}
        </AtomMenuItem>
        <AtomMenuItem onClick={handleCloseSettingMenu}>
          <AtomTypography textalign="center">CHỌN CHỦ ĐỀ</AtomTypography>
        </AtomMenuItem>
      </AtomMenu>
    </>
  );
};

export default IconSetting;
