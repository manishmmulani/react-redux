import React from "react";
import PropTypes from "prop-types";

const PostForm = ({ onSubmit: onSubmitHandler }) => {
  let title;
  let body;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(title.value + "\n" + body.value);
        onSubmitHandler(title.value.trim(), body.value.trim());
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        ref={node => {
          title = node;
        }}
      />
      <textarea
        name="body"
        cols="30"
        rows="2"
        ref={node => {
          body = node;
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default PostForm;
