import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
  // Constructor (State & Binding this)
  constructor(props) {
    super(props);

    this.state = {
      // title: "Indecision App",
      subtitle: "Put your life in the hands of a computer",
      options: [],
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  // Life Cycle Methods
  componentDidMount() {
    // Fetch stored data here (fetching from local storage in this case)
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save data here (saving into local storage in this case)
    // useful for when component data has changed

    //if options array didnt change no need to save it in local storage with each component update
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    // Cleaning here
  }

  // Event handlers
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((el) => el !== optionToRemove),
    }));
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

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  // Rendering
  render() {
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
