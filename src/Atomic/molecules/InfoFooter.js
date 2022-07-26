import React from "react";
import AtomStack from "../atoms/AtomStack";

const InfoFooter = (props) => {
  return (
    <AtomStack m={2} direction={"row"} spacing={1}>
      {props.left}
      {props.right}
    </AtomStack>
  );
};

export default InfoFooter;
