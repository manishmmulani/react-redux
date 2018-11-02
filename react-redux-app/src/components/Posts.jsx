import React, { Component } from "react";
import { connect } from "react-redux"; // connects react components with redux store
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  // below will move to store
  state = { posts: [] };

  // below will go away with redux as it's moved to postActions
  // componentWillMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => this.setState({ posts: data }));
  // }
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

//export default Posts;
// This will change to connect which connects state to properties
export default connect(
  null,
  { fetchPosts }
)(Posts);

// Post the above, fetchPosts will be available in this.props
