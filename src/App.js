import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Greetings } from "./components/Greetings/Greetings";
import { Icons } from "./components/Icons/Icons";
import { About } from "./components/About/About";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Icons />
       <About />
       <Portfolio />
     <Footer/>
    </div>
  );
}

export default App;
