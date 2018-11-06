import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/containers/ContainerPosts";
import PostForm from "./components/containers/ContainerPostForm";

import Store from "./redux/ConfigureStore";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
