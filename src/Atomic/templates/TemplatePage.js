import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AppBar from "../organisms/AppBar";
import Footer from "../organisms/Footer";
const TemplatePage = ({ content }) => {
  return (
    <AtomBox>
      <AppBar />
      {content}
      <Footer />
    </AtomBox>
  );
};

TemplatePage.prototype = {
  content: PropTypes.element,
};

TemplatePage.defaultProps = {
  content: null,
};

export default TemplatePage;
