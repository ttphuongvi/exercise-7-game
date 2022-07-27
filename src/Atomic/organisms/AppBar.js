import React from "react";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import DialogLogin from "../molecules/DialogMaxWidth/DialogLogin";
import DialogSignUp from "../molecules/DialogMaxWidth/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import IconSetting from "../molecules/IconSettingTheme";
import IconAvatar from "../molecules/IconAvatar";
import AtomContainer from "../atoms/AtomContainer";
import AtomToolBar from "../atoms/AtomToolbar";
import { styled } from "@mui/material/styles";
import AtomStack from "../atoms/AtomStack";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuIcon from "../atoms/AtomMenuIcon";

const AppBarStyles = styled(AtomAppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.background.default};
  box-shadow: ${theme.shadows[3]};
`
);

const drawerWidth = 240;

const AppBar = (props) => {
  const user = useSelector((state) => state.user.content);

  return (
    <AppBarStyles
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
      position="fixed"
    >
      <AtomContainer maxWidth={false}>
        <AtomToolBar>
          <AtomIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <AtomMenuIcon />
          </AtomIconButton>
          <AtomGrid container alignItems="center">
            <AtomGrid item xl={5.5} lg={5.5} md={5} sm={5} xs={6}>
              <ImageLogo alt="logo" src="/images/logo_hahalolo.png"></ImageLogo>
            </AtomGrid>
            <AtomGrid item xl={4} lg={4} md={4} sm={0.0001} xs={0.0001}>
              <AtomGrid container justifyContent="flex-end">
                {" "}
                <MenuTab />
              </AtomGrid>
            </AtomGrid>
            <AtomGrid item xl={2.5} lg={2.5} md={3} sm={7} xs={6}>
              <AtomStack direction={"row"} spacing={1} alignItems="center">
                <IconSetting />

                {user && user.isLogin ? (
                  <IconAvatar />
                ) : (
                  <AtomStack direction={"row"} alignItems="center">
                    <DialogLogin /> / <DialogSignUp />
                  </AtomStack>
                )}
              </AtomStack>
            </AtomGrid>
          </AtomGrid>
        </AtomToolBar>
      </AtomContainer>
    </AppBarStyles>
  );
};

export default AppBar;
