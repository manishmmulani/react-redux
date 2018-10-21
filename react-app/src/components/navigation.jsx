import React, { Component } from "react";

class Navigation extends Component {
  renderTotalCount() {
    let total = 0;
    for (let i = 0; i < this.props.counters.length; i++) {
      total += this.props.counters[i].value;
    }
    return total;
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navigation {this.renderTotalCount()}
        </span>
      </nav>
    );
  }
}

export default Navigation;
