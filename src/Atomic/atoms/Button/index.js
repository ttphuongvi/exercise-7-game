import React from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

const ButtonStyle = (prop) => {
  return (
    <Button
      hidden={prop.hidden}
      className={prop.class}
      onClick={prop.onClick}
      variant="contained"
    >
      <span className={prop.classSpan}>{prop.children}</span>
    </Button>
  );
};

export default Button;
