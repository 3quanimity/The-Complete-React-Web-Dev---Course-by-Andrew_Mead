class IndecisionApp extends React.Component {
  // Constructor (State & Binding this)
  constructor(props) {
    super(props);
    this.state = {
      // title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: props.options,
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  // Event handlers
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    // validation
    if (!option) {
      return "Please enter a valid value!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists!";
    }

    this.setState((prevState) => {
      return { options: prevState.options.concat(option) };
    });
  }

  // Rendering
  render() {
    console.log(this.state.options);
    return (
      <div>
        <Header /*title={this.state.title}*/ subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision App", // define default value and let other pages override it when needed
};

const Action = ({ handlePick, hasOptions }) => (
  <div>
    <button onClick={handlePick} disabled={!hasOptions}>
      What should i do?
    </button>
  </div>
);

const Options = ({ handleDeleteOptions, options }) => (
  <div>
    <button onClick={handleDeleteOptions}>Remove All</button>
    {options.map((el, i) => (
      <Option optionText={el} key={i} />
    ))}
  </div>
);

const Option = ({ optionText }) => (
  <div>
    <p>{optionText}</p>
  </div>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.optionInput.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });

    e.target.optionInput.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionInput" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
