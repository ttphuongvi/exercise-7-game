import React from "react";
import Tabs from "@material-ui/core/Tabs";
const AtomTabs = (props) => {
  return (
    <Tabs
      value={props.value}
      onChange={props.onChange}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </Tabs>
  );
};

export default AtomTabs;
