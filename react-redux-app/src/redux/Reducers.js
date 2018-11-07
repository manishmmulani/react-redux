import { combineReducers } from "redux";
import { ADD_POST, RECEIVE_POSTS } from "./Actions";

function postReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload;
    default:
      return state;
  }
}

function newPostReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({ posts: postReducer, newPost: newPostReducer });
