import React from "react";
import "./styles.css";
const Button = (prop) => {
  return (
    <button hidden={prop.hidden} className={prop.class} onClick={prop.onClick}>
      <span className={prop.classSpan}>{prop.children}</span>
    </button>
  );
};

export default Button;
