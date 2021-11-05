import React from "react";
import "./Greetings.css";
import logo from "./img/Igorich.png";

export const Greetings = () => {
  return (
    <section className="main-greetings">
      <div className="greetings-text">
        <div className="text-hello">Hello</div>
        <div className="text-title">I’m Igor Kravets</div>
        <div className="text-mini">
          I've been doing web design, front-end and back-end development for a
          year now. Do you need a website design, site layout, or maybe a
          turnkey website? Then contact me
        </div>

        <button className="button-Contact">Contact me</button>
      </div>

      <div className="main-logo">
        <img src={logo} alt="" className="" />
      </div>
    </section>
  );
};
