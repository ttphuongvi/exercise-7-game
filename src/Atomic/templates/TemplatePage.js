import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../../atoms/AtomBox";
import { styled } from "@material-ui/core/styles";
import AtomPaper from "../../atoms/AtomPaper";

const PaperStyle = styled(AtomPaper)({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  justifyContent: "space-between",
  position: "relative",
  margin: "20px auto",
  padding: "20px 30px",
  boxShadow:
    "0 4px 8px 0 rgb(175 156 156 / 20%), 0 6px 20px 0 rgb(255 255 255 / 19%)",
});

const TemplatePage = ({ appbar, slider, title, content, footer }) => {
  return (
    <AtomBox>
      {appbar}
      {slider}
      <PaperStyle>
        {title}
        {content}
      </PaperStyle>
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

export default TemplatePage;
