import { createStore } from "redux";
import todoApp from "../reducers";

const store = createStore(todoApp);

// optionally can pass default state as second argument

// Store methods
// getState -> access to state
// dispatch -> to update state
// subscribe(listener) -> register listener to state changes

export default store;
