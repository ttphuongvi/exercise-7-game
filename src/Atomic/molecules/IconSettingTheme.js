import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import AtomTypography from "../atoms/AtomTypography";
import { AppContext } from "../../context/context";
import AtomButton from "../atoms/AtomButton";
import AtomDarkMode from "../atoms/AtomDarkMode";
import AtomLightMode from "../atoms/AtomLightMode";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const IconSetting = (props) => {
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { darkMode, changeDarkMode } = React.useContext(AppContext);

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
          <AtomButton
            fullWidth
            color="inherit"
            startIcon={darkMode ? <AtomDarkMode /> : <AtomLightMode />}
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
