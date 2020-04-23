"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  // Constructor (State & Binding this)
  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      // title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: props.options
    };

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    return _this;
  }

  // Life Cycle Methods


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Fetch stored data here (fetching from local storage in this case)
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (error) {
        // Do nothing at all
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Save data here (saving into local storage in this case)
      // useful for when component data has changed

      //if options array didnt change no need to save it in local storage with each component update
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
    // Cleaning here


    // Event handlers

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (el) {
            return el !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      // validation
      if (!option) {
        return "Please enter a valid value!";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option already exists!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }

    // Rendering

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header /*title={this.state.title}*/, { subtitle: this.state.subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      title
    ),
    subtitle && React.createElement(
      "h2",
      null,
      subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision App" // define default value and let other pages override it when needed
};

var Action = function Action(_ref2) {
  var handlePick = _ref2.handlePick,
      hasOptions = _ref2.hasOptions;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: handlePick, disabled: !hasOptions },
      "What should i do?"
    )
  );
};

var Options = function Options(_ref3) {
  var handleDeleteOptions = _ref3.handleDeleteOptions,
      options = _ref3.options,
      handleDeleteOption = _ref3.handleDeleteOption;
  return React.createElement(
    "div",
    null,
    options.length === 0 && React.createElement(
      "p",
      null,
      "Please add an option to get started"
    ),
    React.createElement(
      "button",
      { onClick: handleDeleteOptions },
      "Remove All"
    ),
    options.map(function (el, i) {
      return React.createElement(Option, { optionText: el, key: i, handleDeleteOption: handleDeleteOption });
    })
  );
};

var Option = function Option(_ref4) {
  var optionText = _ref4.optionText,
      handleDeleteOption = _ref4.handleDeleteOption;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      optionText
    ),
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          return handleDeleteOption(optionText);
        } },
      "Remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      error: null
    };

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.optionInput.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        e.target.optionInput.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "optionInput" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("root"));
