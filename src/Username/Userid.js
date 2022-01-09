import React from "react";
import "./Userid.scss";
import Slider from "@mui/material/Slider";
import { useState } from "react";


const Userid = () => {
const [Usercount, setUsercount] = useState(0);
const getValue = (e, val) => {
    setUsercount(val);
  };
  return (
    <>
    <div className="user_info_container">
    <h1>Number of Users : </h1>
      <div className="Usercntslider">
      <Slider
        aria-label="Users"
        color="secondary"
        defaultValue={1}
        step={1}
        marks
        min={1}
        max={5}
        onChange={getValue}
      />
    </div>
    <h2>{Usercount}</h2>
    
      </div>
      
    </>
  );
};

export default Userid;
