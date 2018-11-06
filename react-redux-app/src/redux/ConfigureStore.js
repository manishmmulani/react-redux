import { createStore } from "redux";
import Reducer from "./Reducers";

const initialState = {
  posts: [{ id: -1, title: "Default title", body: "Test Post" }]
};

export default createStore(Reducer, initialState);
