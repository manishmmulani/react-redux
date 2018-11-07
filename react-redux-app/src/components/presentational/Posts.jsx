import React, { Component } from "react";
import PropTypes from "prop-types";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(props) {
    if (props.newPost) {
      this.props.posts.unshift(props.newPost);
    }
  }

  render() {
    const posts = this.props.posts;
    return (
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <p style={{ fontWeight: "bold" }}>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  fetchPosts: PropTypes.func.isRequired
};

export default Posts;
