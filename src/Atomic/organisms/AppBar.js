import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import DivFlexRow from "../molecules/DivFlexRow";
import Logo from "../../img/hahalolo-logo-1.png";
import DialogLogin from "../molecules/DialogLogin";
import DialogSignUp from "../molecules/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import IconSetting from "../molecules/IconSetting";
import IconAvatar from "../molecules/IconAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "64px",
  },
  appbar: {
    backgroundColor: theme.status.black,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    padding: theme.spacing(1),
  },
  toolbar: {
    justifyContent: "space-between",
    padding: "0px",
  },
  menuRight: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();

  const user = useSelector((state) => state.user.content);

  return (
    // <AtomBox className={classes.root}>
    <AtomAppBar color="primary" className={classes.appbar} position="fixed">
      <AtomGrid container direction="row">
        <AtomGrid container alignItems="center" item xs={6}>
          <ImageLogo alt="logo" src={Logo}></ImageLogo>
        </AtomGrid>
        <AtomGrid container justifyContent="flex-end" item xs={4}>
          <MenuTab />
        </AtomGrid>
        <AtomGrid container direction="row" alignItems="center" item xs={2}>
          <AtomGrid item xs={2}>
            <IconSetting />
          </AtomGrid>
          <AtomGrid item xs={10}>
            {user && user.isLogin ? (
              <IconAvatar />
            ) : (
              <DivFlexRow>
                <DialogLogin /> / <DialogSignUp />
              </DivFlexRow>
            )}
          </AtomGrid>
        </AtomGrid>

        {/* <AtomContainer maxWidth="xl">
          <AtomToolBar className={classes.toolbar}>
            <DivFlexRow className={classes.menuRight}>
              <AtomBox sx={{ flexGrow: 0 }}>
                <AtomBox
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                ></AtomBox>
              </AtomBox>
            </DivFlexRow>
          </AtomToolBar>
        </AtomContainer> */}
      </AtomGrid>
    </AtomAppBar>

    // </AtomBox>
  );
};
export default ResponsiveAppBar;
