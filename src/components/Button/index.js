import React from "react";
import "./styles.css";
const Button = (prop) => {
  return (
    <button class="custom-btn btn-3">
      <span>{prop.title}</span>
    </button>
  );
};

export default Button;
