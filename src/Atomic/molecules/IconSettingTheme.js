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
        {/* <AtomMenuItem>
          <AtomButton
            fullWidth
            color="inherit"
            startIcon={darkMode ? <AtomDarkMode /> : <AtomLightMode />}
            onClick={() => changeDarkMode()}
          >
            Ch??? ????? {darkMode ? "t???i" : "s??ng"}
          </AtomButton> */}
        {/* </AtomBox> */}
        {/* </AtomMenuItem>
        <AtomMenuItem onClick={handleCloseSettingMenu}>
          <AtomTypography textalign="center">CH???N CH??? ?????</AtomTypography>
        </AtomMenuItem> */}
        <AtomList
          sx={{
            width: "100%",
            minWidth: 230,
            maxWidth: 230,
            bgcolor: "background.defalt",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <AtomListSubheader component="div" id="nested-list-subheader">
          //     C??i ?????t ch??? ?????
          //   </AtomListSubheader>
          // }
        >
          <AtomListItemButton onClick={() => changeDarkMode()}>
            <AtomListItemIcon>
              {darkMode ? <AtomDarkMode /> : <AtomLightMode />}
            </AtomListItemIcon>
            <AtomListItemText primary={`Ch??? ????? ${darkMode ? "t???i" : "s??ng"}`} />
          </AtomListItemButton>
          <AtomListItemButton onClick={handleClick}>
            <AtomListItemIcon>
              <AtomPaletteOutlinedIcon />
            </AtomListItemIcon>
            <AtomListItemText primary="Ch???n ch??? ?????" />
            {open ? <AtomExpandLess /> : <AtomExpandMore />}
          </AtomListItemButton>
          <AtomCollapse in={open} timeout="auto" unmountOnExit>
            <AtomList component="div">
              <AtomGrid justifyContent={"center"} container spacing={3}>
                {customThemes.map((theme) => {
                  const buttonColor = theme["500"];
                  return (
                    <AtomGrid item>
                      <AtomButton
                        sx={{
                          bgcolor: buttonColor,
                          borderRadius: "50%",
                          minWidth: "30px",
                          width: "30px",
                          height: "30px",
                        }}
                        onClick={() => {
                          changeCustomTheme(buttonColor);
                        }}
                      ></AtomButton>
                    </AtomGrid>
                  );
                })}
              </AtomGrid>
              <AtomStack mt={1} justifyContent={"center"}>
                <AtomButton
                  sx={{ textTransform: "none" }}
                  onClick={() => changeCustomTheme(null)}
                >
                  ?????t l???i ch??? ?????
                </AtomButton>
              </AtomStack>
            </AtomList>
          </AtomCollapse>
        </AtomList>
      </AtomMenu>
    </>
  );
};

export default IconSetting;
