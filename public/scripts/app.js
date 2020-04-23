"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  // State
  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };

    // binding handlers
    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  //Life Cycle


  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var count = parseInt(localStorage.getItem("count"), 10);

      if (!isNaN(count)) {
        this.setState(function () {
          return { count: count };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
        console.log("updated");
      }
    }

    // Event Handlers

  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      // *METHOD.1 UPDATING THE STATE => SIMPLY RETARDED
      // this.state.count = this.state.count + 1;
      // ReactDOM.render(<Counter />, document.getElementById("root"));

      //*METHOD.3 UPDATING THE STATE => Passing an object: OBSOLETE
      // this.setState({ count: ++this.state.count });

      // *METHOD.3 UPDATING THE STATE => Updater Function, USE THIS
      this.setState(function (prevState) {
        return { count: prevState.count + 1 };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return { count: 0 };
      });
    }

    // Rendering

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleMinusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("root"));

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
