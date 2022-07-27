import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/styles";
import Drawer from "../organisms/Drawer";
import { CssBaseline } from "@mui/material";

// const drawerWidth = 240;

const Content = styled(AtomBox)({
  marginTop: "64px",
  flexGrow: 1,

  // width: { sm: `calc(100% - ${drawerWidth}px)` },
});

const TemplatePage = ({ appbar, drawer, content, footer }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AtomBox sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      {/* {appbar} */}
      {/* {drawer} */}
      <Drawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Content component="main">
        {content}
        {footer}
      </Content>
    </AtomBox>
  );
};

TemplatePage.propTypes = {
  content: PropTypes.node,
};

TemplatePage.defaultProps = {
  // appbar: <AppBar />,
  // drawer: <Drawer />,
  footer: <Footer />,
};

export default TemplatePage;
