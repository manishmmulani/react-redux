import React from "react";
import PropTypes from "prop-types";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Posts;
