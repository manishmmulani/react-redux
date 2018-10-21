import React, { Component } from "react";

class PostForm extends Component {
  state = { title: "", body: "" };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: {
        contentType: "application/json"
      },
      body: post
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            name="body"
            className="form-control"
            onChange={this.onChange}
            value={this.state.body}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default PostForm;
