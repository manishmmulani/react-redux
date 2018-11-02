import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, onClickHandler, completed }) => {
  return (
    <li
      onClick={onClickHandler}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;
