import { connect } from "react-redux";
import { fetchPosts, receivePosts } from "../../redux/Actions";
import Posts from "../presentational/Posts";

const mapStateToProps = state => {
  return {
    posts: state.posts,
    newPost: state.newPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)));
    }
  };
};

// mapDispatchToProps can be a function or an object
// dispatch => dispatch(receivePosts())
// {fetchPosts : fetchPosts}
export default connect(
  mapStateToProps,
  //mapDispatchToProps both of these are equal
  { fetchPosts }
)(Posts);
