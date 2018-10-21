import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
