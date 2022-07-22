import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/styles";

const Content = styled(AtomBox)({
  marginTop: "64px",
});

const TemplatePage = ({ appbar, content, footer }) => {
  return (
    <AtomBox>
      {appbar}
      <Content>{content}</Content>
      {footer}
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
