import React from "react";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import { AppContext } from "../../context/context";
import AtomDarkMode from "../atoms/AtomDarkMode";
import AtomLightMode from "../atoms/AtomLightMode";
import AtomListItemIcon from "../atoms/AtomListItemIcon";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomPaletteOutlinedIcon from "../atoms/AtomPaletteOutlinedIcon ";
import AtomExpandMore from "../atoms/AtomExpandMore";
import AtomExpandLess from "../atoms/AtomExpandLess";
import AtomCollapse from "../atoms/AtomCollapse";
import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import { getCustomTheme } from "../../services/themes";
import { alpha } from "@mui/material/styles";
import AtomPopper from "../atoms/AtomPopper";
import AtomGrow from "../atoms/AtomGrow";
import AtomPaper from "../atoms/AtomPaper";
import AtomClickAwayListener from "../atoms/AtomClickAwayListener";
import AtomMenuList from "../atoms/AtomMenuList";
import AtomMenuItem from "../atoms/AtomMenuItem";
import AtomIconRestart from "../atoms/AtomIconRestart";
import AtomDivider from "../atoms/AtomDivider";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomContainer from "../atoms/AtomContainer";

const Setting = (props) => {
  // const [anchorElSetting, setAnchorElSetting] = React.useState(null);

  // const handleOpenSettingMenu = (event) => {
  //   setAnchorElSetting(event.currentTarget);
  // };

  // const handleCloseSettingMenu = () => {
  //   setAnchorElSetting(null);
  // };

  const [openIconExpand, setOpenIconExpand] = React.useState(true);

  const handleClickIconExpand = () => {
    setOpenIconExpand(!openIconExpand);
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const { darkMode, changeDarkMode, changeCustomTheme } =
    React.useContext(AppContext);

  const customThemes = getCustomTheme();

  return (
    <>
      <AtomIconButton
        size="large"
        ref={anchorRef}
        // size="medium"
        aria-label="account of current user"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AtomSettingIcon />
      </AtomIconButton>

      <AtomPopper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <AtomGrow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <AtomPaper>
              <AtomClickAwayListener onClickAway={handleClose}>
                <AtomMenuList
                  sx={{
                    width: "100%",
                    minWidth: 230,
                    maxWidth: 230,
                  }}
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <AtomMenuItem
                    onClick={() => {
                      changeDarkMode();
                      handleClose();
                    }}
                  >
                    <AtomListItemIcon>
                      {darkMode ? <AtomDarkMode /> : <AtomLightMode />}
                    </AtomListItemIcon>
                    <AtomListItemText
                      disableTypography
                      primary={`Chế độ ${darkMode ? "tối" : "sáng"}`}
                    />
                  </AtomMenuItem>
                  <AtomDivider variant="middle" />
                  <AtomMenuItem
                    onClick={() => {
                      handleClickIconExpand();
                    }}
                  >
                    <AtomListItemIcon>
                      <AtomPaletteOutlinedIcon />
                    </AtomListItemIcon>
                    <AtomListItemText disableTypography primary="Chọn chủ đề" />
                    {openIconExpand ? <AtomExpandLess /> : <AtomExpandMore />}
                  </AtomMenuItem>
                  <AtomCollapse
                    in={openIconExpand}
                    timeout="auto"
                    unmountOnExit
                  >
                    <AtomContainer>
                      <AtomGrid
                        justifyContent={"center"}
                        container
                        spacing={3}
                        sx={(theme) => ({
                          padding: theme.spacing(1, 3),
                        })}
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

                      {/* 
                          Đặt lại chủ đề
                         */}
                      <AtomToolbar>
                        <AtomButton
                          sx={{ textTransform: "none" }}
                          onClick={() => changeCustomTheme(null)}
                          startIcon={<AtomIconRestart />}
                        >
                          Đặt lại chủ đề
                        </AtomButton>
                      </AtomToolbar>
                    </AtomContainer>
                  </AtomCollapse>
                </AtomMenuList>
              </AtomClickAwayListener>
            </AtomPaper>
          </AtomGrow>
        )}
      </AtomPopper>
    </>
  );
};

export default Setting;
