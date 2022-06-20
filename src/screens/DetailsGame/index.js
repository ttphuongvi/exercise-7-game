import React from "react";
import { connect } from "react-redux";
const DetailsGame = (current) => {
  return <div>DetailsGame</div>;
};
const mapStateToProps = (state) => {
  return {
    current: state._itemGame.currentItem,
  };
};
export default connect(mapStateToProps)(DetailsGame);
