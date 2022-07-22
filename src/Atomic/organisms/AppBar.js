import React from "react";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import DialogLogin from "../molecules/DialogMaxWidth/DialogLogin";
import DialogSignUp from "../molecules/DialogMaxWidth/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import IconSetting from "./../molecules/IconSetting";
import IconAvatar from "../molecules/IconAvatar";
import AtomContainer from "../atoms/AtomContainer";
import AtomToolBar from "../atoms/AtomToolbar";
import { styled } from "@mui/material/styles";

const AppBarStyles = styled(AtomAppBar)(
  ({ theme }) => `
  background-color: ${theme.palette.background.default};
  box-shadow: ${theme.shadows[3]};
`
);

const ResponsiveAppBar = () => {
  const user = useSelector((state) => state.user.content);

  return (
    <AppBarStyles position="fixed">
      <AtomContainer maxWidth="xl">
        <AtomToolBar>
          <AtomGrid container alignItems="center">
            <AtomGrid item xs={6}>
              <ImageLogo alt="logo" src="/images/logo_hahalolo.png"></ImageLogo>
            </AtomGrid>
            <AtomGrid item xs={4}>
              <AtomGrid container justifyContent="flex-end">
                {" "}
                <MenuTab />
              </AtomGrid>
            </AtomGrid>
            <AtomGrid item xs={2}>
              <AtomGrid container alignItems="center">
                <AtomGrid item xs={3}>
                  <IconSetting />
                </AtomGrid>
                <AtomGrid item xs={9}>
                  {user && user.isLogin ? (
                    <IconAvatar />
                  ) : (
                    <AtomGrid container alignItems="center">
                      <DialogLogin /> / <DialogSignUp />
                    </AtomGrid>
                  )}
                </AtomGrid>
              </AtomGrid>
            </AtomGrid>
          </AtomGrid>
        </AtomToolBar>
      </AtomContainer>
    </AppBarStyles>

    // </AtomBox>
  );
};
export default ResponsiveAppBar;
