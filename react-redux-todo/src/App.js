import React, { Component } from "react";
import AddTodo from "./components/container/addTodo";
import Store from "./store";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

import logo from "./logo.svg";
import "./App.css";
import VisibleTodoList from "./components/container/visibleTodoList";
import Footer from "./components/footer";

// Playground for redux  store, action  and reducers
export function playStore() {
  // get Initial State
  console.log(Store.getState());

  // register a listener to state changes
  const unsubscribe = Store.subscribe(() => console.log(Store.getState()));

  // Call actions ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS
  Store.dispatch(addTodo("Go to Cricket Ground"));

  Store.dispatch(addTodo("EAT BREAKFAST"));

  Store.dispatch(toggleTodo(1));

  Store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

  // unsubscribe to state changes
  unsubscribe();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
