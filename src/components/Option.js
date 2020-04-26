import React from "react";

const Option = ({ optionText, handleDeleteOption, count }) => (
  <div className="option">
    <p className="option__text">
      {count}. {optionText}
    </p>
    <button
      className="button button--link"
      onClick={(e) => handleDeleteOption(optionText)}
    >
      remove
    </button>
  </div>
);

export default Option;
