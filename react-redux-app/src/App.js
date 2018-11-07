import React, { Component } from "react";
import "./App.css";

import Posts from "./components/containers/ContainerPosts";
import PostForm from "./components/containers/ContainerPostForm";

import Store from "./redux/ConfigureStore";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { receivePosts, fetchPosts } from "./redux/Actions";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div id="root">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
