import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
const AtomTooltip = (props) => {
  return <Tooltip title={props.title}>{props.children}</Tooltip>;
};

export default AtomTooltip;
