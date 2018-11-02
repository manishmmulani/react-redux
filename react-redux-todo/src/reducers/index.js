import {
  TOGGLE_TODO,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "../actions";

import { combineReducers } from "redux";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

// Below is unused
function todoAppRefactored(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    case TOGGLE_TODO:
      const newTodos = Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      });
    default:
      return state;
  }
}

// todoAppRefactored can now be rewritten as
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  };
}

// Now the above can be rewritten  using combineReducers
const todoAppRedux = combineReducers({
  visibilityFilter,
  todos
});

export default todoAppRedux;
// same as export default todoApp
// same as export default todoAppRefactored

// Defining independent reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.payload === index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
