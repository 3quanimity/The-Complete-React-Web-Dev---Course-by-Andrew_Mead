// State
const state = {
  visible: false,
};

// Handlers
const toggleVisible = () => {
  state.visible = !state.visible;
  renderBuildIt();
};

// Rendering function
const renderBuildIt = () => {
  const { visible } = state;
  // Template
  const template = (
    <div>
      <h1>Build it</h1>
      <button onClick={toggleVisible}>
        {visible ? "Hide this shit" : "Show Stuff"}
      </button>
      {visible && <p>The stuf, The stuf, The stuf, The stuffff...</p>}
    </div>
  );
  // Rendering
  ReactDOM.render(template, document.getElementById("root"));
};

renderBuildIt();
