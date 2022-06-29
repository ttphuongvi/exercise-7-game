import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
const AtomToolBar = (props) => {
  return (
    <Toolbar className={props.className} disableGutters>
      {props.children}
    </Toolbar>
  );
};

export default AtomToolBar;
