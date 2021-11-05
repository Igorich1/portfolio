import React from "react";
import "./Icons.css";
import carbon from "./img/carbon.png";
import computer from "./img/computer.png";
import floders from "./img/folders.png";
import fontisto from "./img/fontisto.png";
import Pen from "./img/Pen.png";
import slash from "./img/slash.png";
import ui from "./img/UI.png";

export const Icons = () => {
  return (
    <section className="blocks">
      <a href="" className="blocks-seven"> 
        <img src={Pen} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Product Design</p>
       </a>
       <a href="" className="blocks-seven"> 
        <img src={ui} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >UX/UI Design</p>
       </a>

       <a href="" className="blocks-seven"> 
        <img src={fontisto} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Icon Design</p>
       </a>

       <a href="" className="blocks-seven"> 
        <img src={carbon} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Logo Design</p>
       </a>
       <a href="" className="blocks-seven"> 
        <img src={slash} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Logo Design </p>
       </a>

       <a className="blocks-seven"> 
        <img src={computer} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Frontend</p>
       </a>
       <a href="" className="blocks-seven"> 
        <img src={floders} alt="" className="bloks-photo" ></img>
        <p className="bloks-name" >Motion</p>
       </a>



    </section>
  );
};
