import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import { Menu, MenuItem } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import "./styles.css";
import data from "./../AppBar/data";
// import AdbIcon from "@mui/icons-material/Adb";
const pages = ["TRANG CHỦ", "DANH SÁCH GAME", "LIÊN HỆ"];
const settings = ["Home", "menu", "contact", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //   let navigate = useNavigate();
  //   const handleClick = () => {
  //     navigate("/menu");
  //   };
  return (
    <AppBar position="fixed">
      <Container className="appbar__container" maxWidth="xl">
        <Toolbar className="appbar__toolbar" disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <img
            className="img__logo"
            alt="logo"
            src="https://assets.topdev.vn/images/2022/03/08/TopDev-hahalolo-logo-1646710802.png"
          ></img>
          <div className="div__container-menu-and-avatar">
            <Box
              className="box__btn-appbar"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {data.map((value, key) => (
                <Button
                  className="button__appbar"
                  key={key}
                  href={value.link}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {value.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    className="avatar--margin"
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
