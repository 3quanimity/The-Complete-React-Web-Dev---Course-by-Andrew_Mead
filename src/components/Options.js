import React from "react";
import Option from "./Option";

const Options = ({ handleDeleteOptions, options, handleDeleteOption }) => (
  <div>
    {options.length === 0 && <p>Please add an option to get started</p>}
    <button onClick={handleDeleteOptions}>Remove All</button>
    {options.map((el, i) => (
      <Option optionText={el} key={i} handleDeleteOption={handleDeleteOption} />
    ))}
  </div>
);

export default Options;
