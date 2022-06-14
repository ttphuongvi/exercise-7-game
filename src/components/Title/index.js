import React from "react";
import "./styles.css";
const Title = (props) => {
  return (
    <div className="header">
      <h1>
        <span className="logo__hahalolo">HAHALOLO //</span> {props.title}
      </h1>
    </div>
  );
};

export default Title;
