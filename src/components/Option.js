import React from "react";

const Option = ({ optionText, handleDeleteOption }) => (
  <div>
    {optionText}
    <button onClick={(e) => handleDeleteOption(optionText)}>Remove</button>
  </div>
);

export default Option;
