import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const Content = styled(AtomBox)(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  width: `calc(100% - ${drawerWidth}px)`,

  marginTop: theme.mixins.toolbar.minHeight,
}));

const TemplatePage = ({ appbar, content, footer }) => {
  return (
    <AtomBox sx={{ display: "flex" }}>
      {appbar}
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
  appbar: <AppBar />,
  footer: <Footer />,
};

export default TemplatePage;
