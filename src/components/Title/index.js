import React from "react";
import "./styles.css";
const Title = (props) => {
  return (
    <div className={props.class}>
      <div className="header">
        <h1>
          <span className="logo__hahalolo">HAHALOLO //</span> {props.title}
        </h1>
      </div>
      {props.children}
    </div>
  );
};

export default Title;
