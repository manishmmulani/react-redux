import { connect } from "react-redux";
import PostForm from "../presentational/PostForm";
import { createPost } from "../../redux/Actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (title, body) => dispatch(createPost(title, body))
  };
};

export default connect(
  mapStateToProps,
  //{ onSubmit: createPost }
  mapDispatchToProps
)(PostForm);
