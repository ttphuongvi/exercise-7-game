import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import AtomAppBar from "../atoms/AtomAppBar";
import ImageLogo from "../molecules/ImageLogo";
import Logo from "../../img/hahalolo-logo-1.png";
import DialogLogin from "../molecules/DialogLogin";
import DialogSignUp from "../molecules/DialogSignUp";
import AtomGrid from "../atoms/AtomGrid";
import MenuTab from "../molecules/MenuTab";
import { IconSetting } from "../../App";
import IconAvatar from "../molecules/IconAvatar";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.background.paper,
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
    <AtomAppBar color="primary" className={classes.appbar} position="fixed">
      <AtomGrid container>
        <AtomGrid container alignItems="center" item xs={6}>
          <ImageLogo alt="logo" src={Logo}></ImageLogo>
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
    </AtomAppBar>

    // </AtomBox>
  );
};
export default ResponsiveAppBar;
