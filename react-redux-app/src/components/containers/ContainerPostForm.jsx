import { connect } from "react-redux";
import PostForm from "../presentational/PostForm";
import { addPost } from "../../redux/Actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (title, body) => dispatch(addPost(title, body))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
