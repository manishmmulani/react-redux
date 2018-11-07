export const ADD_POST = "ADD_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

function addPost(newPost) {
  return {
    type: ADD_POST,
    payload: newPost
  };
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    payload: posts
  };
}

// Action creator that returns a function (with following contract) instead of an action
// function returned here takes 'dispatch' as input
export function fetchPosts() {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)));
  };
}

export function createPost(title, body) {
  const newPost = { title, body };

  return dispatch => {
    console.log("making a post call");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => dispatch(addPost(json)));
  };
}
