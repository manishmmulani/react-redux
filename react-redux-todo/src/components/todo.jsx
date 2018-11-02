import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todoText, onClickHandler, completed }) => {
  return (
    <li
      onClick={onClickHandler}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {todoText}
    </li>
  );
};

Todo.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  todoText: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;
