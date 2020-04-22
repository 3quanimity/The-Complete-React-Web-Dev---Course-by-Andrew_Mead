class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide this stuff" : "Show me the stuff"}
        </button>
        {this.state.visibility && (
          <p>
            The Stuff, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae maiores itaque quam deleniti ipsam! Eius provident
            placeat debitis at hic.
          </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));

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
