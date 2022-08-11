import React from "react";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import DialogLogin from "../molecules/DialogMaxWidth/DialogLogin";
import DialogSignUp from "../molecules/DialogMaxWidth/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import IconAvatar from "../molecules/IconAvatar";
import AtomContainer from "../atoms/AtomContainer";
import AtomToolBar from "../atoms/AtomToolbar";
import { styled } from "@mui/material/styles";
import AtomStack from "../atoms/AtomStack";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuIcon from "../atoms/AtomMenuIcon";
import Settings from "../molecules/Settings";
import { CssBaseline } from "@mui/material";
import AtomBox from "../atoms/AtomBox";
import Drawer from "../molecules/Drawer";

const AppBarStyles = styled(AtomAppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.background.default};
  box-shadow: ${theme.shadows[2]};
`
);

const drawerWidth = 240;

const AppBar = () => {
  const user = useSelector((state) => state.user.content);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBarStyles
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
        position="fixed"
      >
        <AtomContainer maxWidth={false}>
          <AtomToolBar disableGutters>
            <AtomIconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <AtomMenuIcon />
            </AtomIconButton>
            <AtomGrid
              container
              alignItems="center"
              justifyContent={"space-between"}
            >
              <AtomGrid item xl={6} lg={4} md={5.5} xs={7} sm={9}>
                <ImageLogo
                  alt="logo"
                  src="/images/logo_hahalolo.png"
                ></ImageLogo>
              </AtomGrid>

              <AtomGrid item xl={6} lg={8} md={6.5} xs={5} sm={3}>
                <AtomStack direction={"row"} justifyContent="flex-end">
                  <AtomStack direction={"row"} spacing={1} alignItems="center">
                    <MenuTab />
                    <Settings />
                    {user && user.isLogin ? (
                      <IconAvatar />
                    ) : (
                      <AtomStack
                        sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                        direction={"row"}
                        alignItems="center"
                      >
                        <DialogLogin /> / <DialogSignUp />
                      </AtomStack>
                    )}
                  </AtomStack>
                </AtomStack>
              </AtomGrid>
            </AtomGrid>
          </AtomToolBar>
        </AtomContainer>
      </AppBarStyles>
      <AtomBox
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </AtomBox>
    </>
  );
};

export default AppBar;
