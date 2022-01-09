import React from "react";
import "./Userid.scss";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";


const Userid = () => {
const [Usercount, setUsercount] = useState(1);
const [User1, setUser1] = useState('');
const [User2, setUser2] = useState('');
const [User3, setUser3] = useState('');
const [User4, setUser4] = useState('');
const [User5, setUser5] = useState('');
const [User6, setUser6] = useState('');
const [User7, setUser7] = useState('');
const [User8, setUser8] = useState('');
const [User9, setUser9] = useState('');

  const getValue = (e, val) => {
    setUsercount(val);
  };
  const handlechange1 = (event) => {
    setUser1(event.target.value);
    console.log(User1);
  };
  const handlechange2 = (event) => {
    setUser2(event.target.value);
    console.log(User2);
  };
  const handlechange3 = (event) => {
    setUser3(event.target.value);
    console.log(User3);
  };
  const handlechange4 = (event) => {
    setUser4(event.target.value);
    console.log(User4);
  };
  const handlechange5 = (event) => {
    setUser5(event.target.value);
    console.log(User5);
  };
  const handlechange6 = (event) => {
    setUser6(event.target.value);
    console.log(User6);
  };
  const handlechange7 = (event) => {
    setUser7(event.target.value);
    console.log(User7);
  };
  const handlechange8 = (event) => {
    setUser8(event.target.value);
    console.log(User8);
  };
  const handlechange9 = (event) => {
    setUser9(event.target.value);
    console.log(User9);
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
        max={9}
        onChange={getValue}
      />
    </div>
    <h2>{Usercount}</h2>
      </div>
      <div className="input_containers">
        {(Usercount>=1 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user1" variant="filled" onChange={handlechange1} /> }
        {(Usercount>=4 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user2" variant="filled" onChange={handlechange2}/>}
        {(Usercount>=3 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user3" variant="filled" onChange={handlechange3}/>}
        {(Usercount>=2 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user4" variant="filled" onChange={handlechange4}/>}
        {(Usercount>=5 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user5" variant="filled" onChange={handlechange5}/>}
        {(Usercount>=6 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user6" variant="filled" onChange={handlechange6}/>}
        {(Usercount>=7 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user7" variant="filled" onChange={handlechange7}/>}
        {(Usercount>=8 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user8" variant="filled" onChange={handlechange8}/>}
        {(Usercount>=9 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="user9" variant="filled" onChange={handlechange9}/>}
      </div>
      
    </>
  );
};

export default Userid;
