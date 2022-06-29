import React from "react";
import Container from "@material-ui/core/Container";
const AtomContainer = (props) => {
  return (
    <Container className={props.className} maxWidth={props.maxWidth}>
      {props.children}
    </Container>
  );
};

export default AtomContainer;
