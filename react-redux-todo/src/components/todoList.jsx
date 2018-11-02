import React from "react";
import Todo from "./todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClickHandler={() => onTodoClick(index)} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todoText: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
