import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
import { styled } from "@material-ui/core/styles";

const Content = styled(AtomBox)({
  marginTop: "64px",
});
const BoxContainer = styled(AtomBox)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
const TemplatePage = ({ content }) => {
  return (
    <BoxContainer>
      <AppBar />
      <Content>{content}</Content>
      <Footer />
    </BoxContainer>
  );
};

TemplatePage.prototype = {
  content: PropTypes.element,
};

TemplatePage.defaultProps = {
  content: null,
};

export default TemplatePage;
