import React from "react";
import { useState } from "react";
// import DarkModeToggle from "react-dark-mode-toggle";
import Dark from "./Dark";
import "./Button.css";

const Button = (props) => {
  if (props.type === 1) {
    return (
      <>
        <div className="buttons1 btns">
          <a href="#" className="button pulse">
            {props.title}
          </a>
        </div>
      </>
    );
  } else if (props.type === 2) {
    return (
      <>
        <div className="buttons2 btns">
          <a className="swap">
            {props.title}
            <span>{props.title}</span>
          </a>
        </div>
      </>
    );
  } else if (props.type === 3) {
    return (
      <>
        <div className="buttons3 btns">
          {/* <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          /> */}
          <div className="switching">
            <Dark/>
          </div>
          
        </div>
      </>
    );
  } else if (props.type === 4) {
    return (
      <>
        <div className="buttons4 btns">
          <div className="add-del">
            <button>+</button><span>{props.title}</span><button>-</button>
          </div>
        </div>
      </>
    );
  }
};

export default Button;
