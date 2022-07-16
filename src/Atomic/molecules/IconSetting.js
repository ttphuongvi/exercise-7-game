import { CssBaseline, Switch } from "@material-ui/core";
import React, { useState } from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenu from "../atoms/AtomMenu";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import AtomTypography from "../atoms/AtomTypography";

const IconSetting = () => {
  const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  const [mode, setMode] = useState("light");
  return (
    <>
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
        onClose={handleCloseSettingMenu}
      >
        <AtomMenuItem>
          CHẾ ĐỘ TỐI
          <CssBaseline />
          <Switch
            onChange={() => setMode(mode === "dark" ? "light" : "dark")}
            onClick={handleCloseSettingMenu}
          />
        </AtomMenuItem>
        <AtomMenuItem onClick={handleCloseSettingMenu}>
          <AtomTypography textalign="center">CHỌN CHỦ ĐỀ</AtomTypography>
        </AtomMenuItem>
      </AtomMenu>
    </>
  );
};

export default IconSetting;
