import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
// import AppBarNew from "../organisms/AppBarNew";
import Footer from "../organisms/Footer";
const TemplatePage = ({ appbar, content, footer }) => {
  return (
    <AtomBox>
      {appbar}
      {content}
      {footer}
    </AtomBox>
  );
};

TemplatePage.prototype = {
  appbar: PropTypes.element,
  slider: PropTypes.element,
  title: PropTypes.element,
  content: PropTypes.element,
  footer: PropTypes.element,
};

TemplatePage.defaultProps = {
  // appbar: <AppBarNew />,
  content: null,
  footer: <Footer />,
};

export default TemplatePage;
