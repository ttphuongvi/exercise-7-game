import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@mui/styles";

const Content = styled(AtomBox)({
  marginTop: "64px",
});

const BoxContainer = styled(AtomBox)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

const TemplatePage = ({ appbar, content, footer }) => {
  return (
    <BoxContainer>
      {appbar}
      <Content>{content}</Content>
      {footer}
    </BoxContainer>
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
