import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [], // to hold list of posts
  item: {} // to hold the single post when we get response back from NEW_POST action
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    //case NEW_POST:
    default:
      return state;
  }
}
