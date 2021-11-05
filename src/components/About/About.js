import React from "react";
import "./About.css";
import joma from "./img/joma.png";
import ellips from "./img/Ellips.png";
import palmua from "./img/palmua.png";
import carpatu from "./img/carpatu.png";

export const About = () => {
  return (
    <section className="about">
      <div className="bloks-photo">
        <img src={joma} alt="" className="photo-joma"></img>
        <img src={carpatu} alt="" className="photo-carpaty"></img>
      </div>

      <div className="about-container">
        <p className="about-title">About me</p>
        <p className="about-description">
          Hello again everyone! So, you already know that my name is Gleb. A
          little about myself: student, 18 y.o., athlete-football player, I love
          creativity since childhood, I live in
          <a href=""> lviv</a>,<a href=""> Ukraine</a>. Why programming?
          Everything is elementary - I like it, the profession of the future,
          thanks to which I can provide myself and fulfill my dream - travel, at
          the moment I specialize in web design, front-end and back-end
          development, turnkey websites. Why should you choose me? I approach
          each order with great responsibility and love, as I want to make a
          name for myself, exclude plagiarism and negligence, fully study the
          project, the client and its target audience, work for quality, trying
          to make an order as quickly and uniquely as possible, taking into
          account all the edits and wishes. By trusting me, you will get the
          maximum return for your project, save your nerves and time. If you are
          interested in me , you want to know something more or use my services,
          then I will provide all my contacts below.
        </p>
      </div>
      <div className="photo">
        <img src={palmua} alt="" className="photo-palmua"></img>
      </div>
      <img src={ellips} alt="" className="about__background" />
    </section>
  );
};
