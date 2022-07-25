import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/styles";
import Drawer from "../organisms/Drawer";
import { CssBaseline } from "@mui/material";
import AtomToolBar from "../atoms/AtomToolbar";

const Content = styled(AtomBox)({
  marginTop: "64px",
});

const drawerWidth = 240;

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
      <Content
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
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
