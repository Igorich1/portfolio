import React from "react";
import "./Portfolio.css";
import left from "./img/left.png";
import right from "./img/right.png";
import rightMini from "./img/rightMini.png";
import logo from "./img/logo.png";

export function Portfolio() {
  return (
    <section className="box">
      <p className="portfolio">Portfolio</p>
      <div className="portfolio-container">
        <button className="button-left">
          {" "}
          <img src={left} alt="" className="stren" />{" "}
        </button>

        <div className="block">
          <img src={logo} alt="" className="photo-logo" />
          <div className="text__container__blok">
            <p className="paragravph">Landing Ice-cream</p>
            <div className="text-container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              orci eu elit consequat posuere ut sed elit. Nulla et tristique
              felis. Morbi quis orci non purus blandit fringilla. Etiam et
              mollis eros. Duis venenatis vulputate lacus, non tristique eros
              placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris
              nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim
              purus, tempor sed massa vel, accumsan bibendum magna. Nullam
              hendrerit cursus purus, sit amet viverra arcu gravida vel.
            </div>

            <div className="more-blok">
              <a href="" className="more">
                More
              </a>
              <img src={rightMini} alt="" className="more-photo" />
            </div>
          </div>
        </div>
        <button className="button-left">
          {" "}
          <img src={right} alt="" className="stren" />{" "}
        </button>
      </div>
    </section>
  );
}
