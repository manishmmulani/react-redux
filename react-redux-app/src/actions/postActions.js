import { FETCH_POSTS, NEW_POST } from "./types";

// alternate way to define below is
// export const fetchPosts = () => dispatch => { fetch(..)}
export function fetchPosts() {
  // dispatch below is like a promise
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        // Here we are dispatching data to reducer that will be available as 'action' parameter
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}
