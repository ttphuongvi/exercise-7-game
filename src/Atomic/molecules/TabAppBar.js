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
import FormLogin from "../organisms/Login";
import logo from "../../img/hahalolo-logo-1.png";

const TabAppBar = (props) => {
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
          <img className="img__logo" alt="logo" src={logo}></img>
          <div className="div__container-menu-and-avatar">
            <AtomTabs
              // value={tabBarValue}
              value={props.value}
              onChange={props.navigateTabListgame}
              aria-label="simple tabs example"
            >
              <AtomTab label="TRANG CHỦ" {...a11yProps(0)} />
              <AtomTab label="DANH SÁCH GAME" {...a11yProps(1)} />
              <AtomTab label="DANH MỤC" {...a11yProps(2)} />
              <AtomTab label="LIÊN HỆ" {...a11yProps(3)} />
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
              <AtomTooltip title="Open settings">
                <AtomIconButton onClick={props.handleOpenNavMenu} sx={{ p: 0 }}>
                  <AtomAvatar
                    className="avatar--margin"
                    alt="Remy Sharp"
                    // src="/static/images/avatar/2.jpg"
                  />
                </AtomIconButton>
              </AtomTooltip>
            </AtomBox>
            <FormLogin />
          </div>
        </AtomToolbar>
      </AtomContainer>
    </AtomAppBar>
  );
};

export default TabAppBar;
