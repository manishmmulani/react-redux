export const ADD_POST = "ADD_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export function addPost(title, body) {
  return {
    type: ADD_POST,
    payload: {
      title,
      body
    }
  };
}
