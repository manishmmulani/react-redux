import { combineReducers } from "redux";
import { ADD_POST } from "./Actions";

function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({ posts: postReducer });
