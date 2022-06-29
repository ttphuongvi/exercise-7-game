import React from "react";
import IconButton from "@material-ui/core/IconButton";
const AtomIconButton = (props) => {
  return (
    <IconButton
      size={props.size}
      aria-label={props.ariaLabel}
      aria-controls={props.ariaControls}
      aria-haspopup={props.ariaHaspopup}
      onClick={props.onClick}
      color={props.color}
      sx={props.sx}
    >
      {props.children}
    </IconButton>
  );
};

export default AtomIconButton;
