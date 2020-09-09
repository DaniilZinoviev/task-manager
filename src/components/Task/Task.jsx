import React from "react";
import PropTypes from "prop-types";

import "./Task.scss";

const Task = ({ item, index }) => {
  return <div className="task card px-2 py-1 mb-2">{item.title}</div>;
};

Task.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Task;
