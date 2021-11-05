import React from "react";
import "./Footer.css";
import logotxt from "./img/logotxt.png";
import botom from "./img/botom.png";

export const Footer = () => {
  return (
    <footer className="botom">
      <div className="botom-container">
        <a href="" className="text">Home</a>
        <a href="" className="text">About me</a>
        <a href="" className="text">Portfolio</a>
        <a href="" className="text">Contact</a>
      </div>
      <div className="botom-container">
        <p className="text">Contact:</p>
        <p className="text">Email: notitanic33@gmail.com</p>
        <p className="text">Inst: notitanic33</p>
        <p className="text">Calls: +7 (900) - 121 - 54 -54</p>
      </div>
      <div className="botom-container">
        <img src={logotxt} alt="" className="logo" />
        <button className="right-photo">
          {" "}
          <img src={botom} alt="" className="botom_photo" />{" "}
        </button>
        <p className="text-clas">Copyright © 2021, Notitanic:</p>
      </div>
      <div className="botom-container"></div>
    </footer>
  );
};
