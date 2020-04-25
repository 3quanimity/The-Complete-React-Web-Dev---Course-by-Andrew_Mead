import React from "react";

export default class AddOption extends React.Component {
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

    this.setState(() => ({ error }));

    if (!error) {
      e.target.optionInput.value = "";
    }
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
