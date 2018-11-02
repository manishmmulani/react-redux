import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

const AddTodo = ({ dispatch }) => {
  let inputElement;

  const submitHandler = e => {
    e.preventDefault();
    if (inputElement.value.trim()) {
      dispatch(addTodo(inputElement.value));
      inputElement.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        ref={node => {
          inputElement = node;
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

// No mapDispatchToProp is defined, hence dispatch can directly be accessed in the functional component
export default connect()(AddTodo);
