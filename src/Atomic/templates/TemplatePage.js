import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/material/styles";
import Drawer from "../molecules/Drawer";
import { CssBaseline } from "@mui/material";

const drawerWidth = 240;

const Content = styled(AtomBox)(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  width: `calc(100% - ${drawerWidth}px)`,

  marginTop: theme.mixins.toolbar.minHeight,
}));

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
      <AtomBox
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </AtomBox>

      <Content
        sx={
          {
            // flexGrow: 1,
            // p: 3,
            // width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          }
        }
        component="main"
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
