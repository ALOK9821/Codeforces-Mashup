import React from "react";
import "./Button.css";

const Button = (props) => {
  if (props.type === 1) {
    return (
      <>
        <div className="buttons1">
          {/* <a href="#" title={props.title}> <i className="fa fa-dribbble"></i> {props.title} </a> */}
          <a href="#" className="button pulse">
            {props.title}
          </a>
        </div>
      </>
    );
  } else if (props.type === 2) {
    return (
    <>
    <div className="buttons2">
    <a className="swap">
		{props.title}
		<span>{props.title}</span>
	</a>
      </div>
    </>
    );
  }
};

export default Button;
