import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducers";

const initialState = {
  posts: [{ id: -1, title: "Default title", body: "Test Post" }]
};

export default createStore(
  Reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
