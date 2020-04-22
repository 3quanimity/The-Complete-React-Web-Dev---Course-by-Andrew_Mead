"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.state = {
      visibility: false
    };

    _this.handleToggleVisibility = _this.handleToggleVisibility.bind(_this);
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "handleToggleVisibility",
    value: function handleToggleVisibility() {
      this.setState(function (prevState) {
        return { visibility: !prevState.visibility };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.handleToggleVisibility },
          this.state.visibility ? "Hide this stuff" : "Show me the stuff"
        ),
        this.state.visibility && React.createElement(
          "p",
          null,
          "The Stuff, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae maiores itaque quam deleniti ipsam! Eius provident placeat debitis at hic."
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("root"));

// // UNDER THE HOOD
// // State
// const state = {
//   visible: false,
// };

// // Handlers
// const toggleVisible = () => {
//   state.visible = !state.visible;
//   renderBuildIt();
// };

// // Rendering function
// const renderBuildIt = () => {
//   const { visible } = state;
//   // Template
//   const template = (
//     <div>
//       <h1>Build it</h1>
//       <button onClick={toggleVisible}>
//         {visible ? "Hide this shit" : "Show Stuff"}
//       </button>
//       {visible && <p>The stuf, The stuf, The stuf, The stuffff...</p>}
//     </div>
//   );
//   // Rendering
//   ReactDOM.render(template, document.getElementById("root"));
// };

// renderBuildIt();
