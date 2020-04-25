import React from "react";

const Header = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision App", // define default value and let other pages override it when needed
};

export default Header;
