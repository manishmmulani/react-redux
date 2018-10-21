import React, { Component } from "react";

class Counter extends Component {
  // Props are only inputs to the components and cannot be assigned more than once.
  // Note that the state values are initialized with props only once
  // subsequent changes to props from the Counters will not reflect the state

  state = {
    // count: this.props.counter.value,
    // maxCount: this.props.counter.maxCount,
    imageUrl: "https://picsum.photos/200",
    tags: []
  };

  // Not required if we are initilizing handleIncrement as arrow function instead of method
  constructor(props) {
    // If constructor  is defined, then we should take props as input or otherwise
    // this.props will not be  available above and in constructor
    super(props);
    this.handleIncrement_old = this.handleIncrement_old.bind(this);
  }

  handleIncrement_old() {
    // note that 'this' is not available in this context
    // Hence we are binding handleIncrement to 'this' where this refers to object of Counter
    // Another option is to convert handleIncrement to an arrow function and remove the constructor
    console.log("Increment clicked " + this.state.count);
  }

  handleIncrement = () => {
    console.log("Increment New called", this.state.count);

    if (this.state.count + 1 <= this.state.maxCount) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // React.Fragment instead of div to get rid of extra div
      // Note className should be used instead of class as class is a reserved keyword

      <React.Fragment>
        {/*<img src={this.state.imageUrl} alt="" />*/}
        {/* m-2 is to add margin */}
        {/* Each li element should have key property for react to be able to render DOM when state changes happen. Check warning in browser console*/}
        {/* Note the handler for button click is reference to the function and not calling the function*/}
        <span className={this.getFormatCountClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.props.counter.maxCount} Items in Stock
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getFormatCountClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // return this.state.count === 0 ? "ZERO" : this.state.count;
    // Let's do object destructuring since this.state.count is repeated
    // note we can return JSX expression <h1></h1>

    const { value } = this.props.counter;
    return value === 0 ? <span>Zero</span> : value;
  }
}

export default Counter;
