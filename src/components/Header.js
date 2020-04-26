import React from "react";

const Header = ({ title, subtitle }) => (
  <div className="header">
    <h1 className="header__title">{title}</h1>
    {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision App", // define default value and let other pages override it when needed
};

export default Header;
