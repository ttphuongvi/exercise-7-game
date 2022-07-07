import React from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomAvatar from "../atoms/AtomAvatar";
import AtomBox from "../atoms/AtomBox";
import AtomContainer from "../atoms/AtomContainer";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomSettingIcon from "../atoms/AtomSettingIcon";
import AtomTab from "../atoms/AtomTab";
import AtomTabs from "../atoms/AtomTabs";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTooltip from "../atoms/AtomTooltip";
import Login from "./Login";
import SignUp from "./SignUp";
import logo from "../../img/hahalolo-logo-1.png";
import DivFlexRow from "../templates/TemplateTag/DivFlexRow";
import { makeStyles } from "@material-ui/core/styles";
import ImageLogo from "../templates/TemplateTag/ImageLogo";

const useStyles = makeStyles({
  tab: {
    fontFamily: "Oswald",
  },
});

const TabAppBar = (props) => {
  const classes = useStyles();

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  return (
    <AtomAppBar position="fixed">
      <AtomContainer className="appbar__container" maxWidth="xl">
        <AtomToolbar className="appbar__toolbar">
          <ImageLogo alt="logo" src={logo}></ImageLogo>
          <div className="div__container-menu-and-avatar">
            <AtomTabs
              TabIndicatorProps={{ style: { background: "#2ac0ff" } }}
              // value={tabBarValue}
              value={props.value}
              onChange={props.navigateTabListgame}
              aria-label="simple tabs "
            >
              <AtomTab
                className={classes.tab}
                label="TRANG CHỦ"
                {...a11yProps(0)}
              />
              <AtomTab
                className={classes.tab}
                label="DANH SÁCH GAME"
                {...a11yProps(1)}
              />
              <AtomTab
                className={classes.tab}
                label="DANH MỤC"
                {...a11yProps(2)}
              />
              <AtomTab
                className={classes.tab}
                label="LIÊN HỆ"
                {...a11yProps(3)}
              />
            </AtomTabs>
            <AtomBox sx={{ flexGrow: 0 }}>
              <AtomIconButton
                size="medium"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.handleOpenNavMenu}
                color="inherit"
              >
                <AtomSettingIcon />
              </AtomIconButton>
              <AtomIconButton onClick={props.handleOpenNavMenu} sx={{ p: 0 }}>
                <AtomAvatar
                  className="avatar--margin"
                  src="/broken-image.jpg"
                />
              </AtomIconButton>
            </AtomBox>
            <DivFlexRow>
              <Login /> / <SignUp />
            </DivFlexRow>
          </div>
        </AtomToolbar>
      </AtomContainer>
    </AtomAppBar>
  );
};

export default TabAppBar;
