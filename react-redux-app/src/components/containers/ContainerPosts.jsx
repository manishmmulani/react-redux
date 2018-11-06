import { connect } from "react-redux";
import Posts from "../presentational/Posts";

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
