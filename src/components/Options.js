import React from "react";
import Option from "./Option";

const Options = ({ handleDeleteOptions, options, handleDeleteOption }) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link" onClick={handleDeleteOptions}>
        Remove All
      </button>
    </div>

    {options.length === 0 && (
      <p className="widget__message">Please add an option to get started</p>
    )}
    {options.map((el, i) => (
      <Option
        optionText={el}
        key={i}
        count={i + 1}
        handleDeleteOption={handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
