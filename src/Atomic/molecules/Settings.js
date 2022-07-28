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
import DialogLogin from "./DialogMaxWidth/DialogLogin";
import AtomLogin from "../atoms/AtomLogin";
import AtomAppRegistrationIcon from "../atoms/AtomAppRegistrationIcon";
import DialogSignUp from "./DialogMaxWidth/DialogSignUp";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const ListItemText = styled(AtomListItemText)(({ theme }) => ({
  fontFamily: theme.typography.titleGame.fontFamily,
  textTransform: "uppercase",
  fontSize: theme.typography.subtitle2.fontSize,
  padding: theme.spacing(1, 1),
}));

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Setting = (props) => {
  const user = useSelector((state) => state.user.content);
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
            Chế độ {darkMode ? "tối" : "sáng"}
          </AtomButton> */}
        {/* </AtomBox> */}
        {/* </AtomMenuItem>
        <AtomMenuItem onClick={handleCloseSettingMenu}>
          <AtomTypography textalign="center">CHỌN CHỦ ĐỀ</AtomTypography>
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
        >
          {user && user.isLogin ? (
            <></>
          ) : (
            <>
              <AtomListItemButton
                sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
              >
                <AtomListItemIcon>
                  <AtomLogin />
                </AtomListItemIcon>
                <AtomListItemText>
                  {" "}
                  <DialogLogin />
                </AtomListItemText>
              </AtomListItemButton>
              <AtomListItemButton
                sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
              >
                <AtomListItemIcon>
                  <AtomAppRegistrationIcon />
                </AtomListItemIcon>
                <AtomListItemText>
                  <DialogSignUp />
                </AtomListItemText>
              </AtomListItemButton>
            </>
          )}

          <AtomListItemButton onClick={() => changeDarkMode()}>
            <AtomListItemIcon>
              {darkMode ? <AtomDarkMode /> : <AtomLightMode />}
            </AtomListItemIcon>
            <ListItemText
              disableTypography
              primary={`Chế độ ${darkMode ? "tối" : "sáng"}`}
            />
          </AtomListItemButton>
          <AtomListItemButton onClick={handleClick}>
            <AtomListItemIcon>
              <AtomPaletteOutlinedIcon />
            </AtomListItemIcon>
            <ListItemText disableTypography primary="Chọn chủ đề" />
            {open ? <AtomExpandLess /> : <AtomExpandMore />}
          </AtomListItemButton>
          <AtomCollapse in={open} timeout="auto" unmountOnExit>
            <AtomList component="div">
              <AtomGrid justifyContent={"center"} container spacing={3}>
                {customThemes.map((theme, index) => {
                  const buttonColor = theme["500"];
                  return (
                    <AtomGrid item key={index}>
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