import React, { Component } from "react";
import Navigation from "./navigation";
import Counters from "./counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5, maxCount: 10 },
      { id: 2, value: 7, maxCount: 8 },
      { id: 3, value: 3, maxCount: 6 },
      { id: 4, value: 1, maxCount: 9 }
    ]
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleDelete = counter => {
    console.log(counter);
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counter.id)
    });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(counter => {
      const newC = { ...counter };
      newC.value = 0;
      return newC;
    });
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <Navigation counters={this.state.counters} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
