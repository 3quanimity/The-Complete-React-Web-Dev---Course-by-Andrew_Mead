class Counter extends React.Component {
  // State
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // binding handlers
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // Event Handlers
  handleAddOne() {
    // *METHOD.1 UPDATING THE STATE => SIMPLY RETARDED
    // this.state.count = this.state.count + 1;
    // ReactDOM.render(<Counter />, document.getElementById("root"));

    //*METHOD.3 UPDATING THE STATE => Passing an object: OBSOLETE
    // this.setState({ count: ++this.state.count });

    // *METHOD.3 UPDATING THE STATE => Updater Function, USE THIS
    this.setState((prevState) => {
      return { count: ++prevState.count };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return { count: --prevState.count };
    });
  }
  handleReset() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  // Rendering
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

// UNDER THE HOOD
// // State
// let count = 0;

// // Event Handlers
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// // Rendering Template
// const renderCounterApp = () => {
//   // Template
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   // Rendering
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
