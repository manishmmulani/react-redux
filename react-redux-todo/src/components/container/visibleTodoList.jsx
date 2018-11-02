import React from "react";
import { connect } from "react-redux";
import TodoList from "../todoList";
import { toggleTodo, VisibilityFilters } from "../../actions";

// Note this is a container component which is redux aware
// Store.subscribe => mapStateToProps -> listen to state changes and translate state to Prop
// Store.dispatch => mapDispatchToProps -> onTodoClick

const getVisibileTodos = state => {
  switch (state.visibilityFilter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return state.todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return state.todos.filter(todo => todo.completed);
    default:
      return state.todos;
  }
};

const mapStateToProps = state => {
  return { todos: getVisibileTodos(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
