import React from "react";
import PropTypes from "prop-types";
import AtomBox from "../atoms/AtomBox";
import AtomTypography from "../atoms/AtomTypography";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      value={props.value}
      index={props.index}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <AtomBox p={3}>
          <AtomTypography component={"span"}>{children}</AtomTypography>
        </AtomBox>
      )}
    </div>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default TabPanel;
