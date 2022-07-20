import React from "react";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import DialogLogin from "../molecules/DialogLogin";
import DialogSignUp from "../molecules/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import { IconSetting } from "../../App";
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
          <AtomGrid container xs={12}>
            <AtomGrid container alignItems="center" item xs={6}>
              <ImageLogo alt="logo" src="/images/logo_hahalolo.png"></ImageLogo>
            </AtomGrid>
            <AtomGrid container justifyContent="flex-end" item xs={4}>
              <MenuTab />
            </AtomGrid>
            <AtomGrid container alignItems="center" item xs={2}>
              <AtomGrid container item justifyContent="center" xs={3}>
                <IconSetting />
              </AtomGrid>
              <AtomGrid container item xs={9}>
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
        </AtomToolBar>
      </AtomContainer>
    </AppBarStyles>

    // </AtomBox>
  );
};
export default ResponsiveAppBar;
