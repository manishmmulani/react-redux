// Define Action Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// Visibility Filter Enum
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

// Action creators
export function addTodo(text) {
  // returns ADD_TODO action
  return {
    type: ADD_TODO,
    payload: text
  };
}

export function toggleTodo(index) {
  // return TOGGLE_TODO action
  return {
    type: TOGGLE_TODO,
    payload: index
  };
}

export function setVisibilityFilter(visibilityFilter) {
  // return SET_VISIBILITY_FILTER action
  return {
    type: SET_VISIBILITY_FILTER,
    payload: visibilityFilter
  };
}
