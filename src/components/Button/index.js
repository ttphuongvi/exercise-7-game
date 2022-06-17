import React from "react";
import "./styles.css";
const Button = (prop) => {
  return (
    <button className={prop.class} onClick={prop.onClick}>
      <span className={prop.classSpan}>{prop.title}</span>
    </button>
  );
};

export default Button;
