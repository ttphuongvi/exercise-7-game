import React from "react";
import Box from "@material-ui/core/Box";
const AtomBox = (props) => {
  return (
    <Box p={props.p} sx={props.sx}>
      {props.children}
    </Box>
  );
};

export default AtomBox;
