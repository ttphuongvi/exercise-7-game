import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenu from "../atoms/AtomMenu";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import { AppContext } from "../../context/context";
import AtomDarkMode from "../atoms/AtomDarkMode";
import AtomLightMode from "../atoms/AtomLightMode";
import AtomList from "../atoms/AtomList";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomPaletteOutlinedIcon from "../atoms/AtomPaletteOutlinedIcon ";
import AtomExpandMore from "../atoms/AtomExpandMore";
import AtomExpandLess from "../atoms/AtomExpandLess";
import AtomCollapse from "../atoms/AtomCollapse";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import { getCustomTheme } from "../../services/themes";
import AtomStack from "../atoms/AtomStack";
import { alpha } from "@mui/material/styles";

const Setting = (props) => {
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

  const { darkMode, changeDarkMode, changeCustomTheme } =
    React.useContext(AppContext);

  const customThemes = getCustomTheme();

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
        id="simple-menu"
        anchorEl={anchorElSetting}
        open={Boolean(anchorElSetting)}
        onClose={handleCloseSettingMenu}
      >
        <AtomList
          sx={(theme) => ({
            width: "100%",
            minWidth: 230,
            maxWidth: 230,
            backgroundColor: theme.palette.background.default,
          })}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <AtomListItemButton onClick={() => changeDarkMode()}>
            <AtomListItemIcon>
              {darkMode ? <AtomDarkMode /> : <AtomLightMode />}
            </AtomListItemIcon>
            <AtomListItemText
              disableTypography
              primary={`Chế độ ${darkMode ? "tối" : "sáng"}`}
              sx={(theme) => ({
                fontFamily: theme.typography.titleGame.fontFamily,
              })}
            />
          </AtomListItemButton>
          <AtomListItemButton onClick={handleClick}>
            <AtomListItemIcon>
              <AtomPaletteOutlinedIcon />
            </AtomListItemIcon>
            <AtomListItemText
              sx={(theme) => ({
                fontFamily: theme.typography.titleGame.fontFamily,
              })}
              disableTypography
              primary="Chọn chủ đề"
            />
            {open ? <AtomExpandLess /> : <AtomExpandMore />}
          </AtomListItemButton>
          <AtomCollapse in={open} timeout="auto" unmountOnExit>
            <AtomList component="div">
              <AtomGrid
                justifyContent={"center"}
                container
                spacing={3}
                pl={3}
                pr={3}
              >
                {customThemes.map((theme, index) => {
                  const buttonColor = theme["500"];
                  return (
                    <AtomGrid item key={index} xs={3}>
                      <AtomIconButton
                        onClick={() => {
                          changeCustomTheme(buttonColor);
                        }}
                        size="large"
                        sx={{
                          backgroundColor: buttonColor,
                          "&:hover": {
                            backgroundColor: alpha(buttonColor, 0.7),
                          },
                        }}
                      ></AtomIconButton>
                    </AtomGrid>
                  );
                })}
              </AtomGrid>
              <AtomStack mt={1} justifyContent={"center"}>
                <AtomButton
                  sx={{ textTransform: "none" }}
                  onClick={() => changeCustomTheme(null)}
                >
                  Đặt lại chủ đề
                </AtomButton>
              </AtomStack>
            </AtomList>
          </AtomCollapse>
        </AtomList>
      </AtomMenu>
    </>
  );
};

export default Setting;
