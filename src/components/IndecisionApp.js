import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  // 🔔 State
  state = {
    // title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
    selectedOption: null,
  };

  // 🔔 Event handlers
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((el) => el !== optionToRemove),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleAddOption = (option) => {
    // validation
    if (!option) {
      return "Please enter a valid value!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option already exists!";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: null,
    }));
  };

  // 🔔 Life Cycle Methods
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

  // 🔔 Rendering
  render() {
    return (
      <div>
        <Header /*title={this.state.title}*/ subtitle={this.state.subtitle} />

        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
