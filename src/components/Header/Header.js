import React from "react";
import logo from "./img/Logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="main-header">
      <div className="title-container">
        <a href="" > 
          <img src={logo} alt="logo" className="header__logo" />
        </a>
      </div>
      <div className="menu">
        <a href=" " className="menu-list">
          Home
        </a>
        <a href=" " className="menu-list">
          About <span className="menu-list__mobile-exclude">me</span>
        </a>
        <a href=" " className="menu-list">
          Portfolio
        </a>
        <a href=" " className="menu-list">
          Contact
        </a>
      </div>
    </header>
  );
};
