import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));

/*

// 🔔 OLD SYNTAX
class OldSyntax {
  constructor() {
    this.name = "Haythem";
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi from ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting()); // needs the this binding for event handlers

// 🔔 OLD SYNTAX
class NewSyntax {
  name = "Haythem"; // Dont need constructor for this (useful for state)
  getGreeting = () => `Hi from ${this.name}`;
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());

*/
