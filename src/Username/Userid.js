import React, { useEffect } from "react";
import "./Userid.scss";
import Slider from "@mui/material/Slider";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios, { Axios } from 'axios';
import { TableBody } from "@mui/material";

const Userid = () => {
const [Usercount, setUsercount] = useState(1);
const [Sub,setSub]=useState(0);
const [User1, setUser1] = useState('');
const [User2, setUser2] = useState('');
const [User3, setUser3] = useState('');
const [User4, setUser4] = useState('');
const [User5, setUser5] = useState('');
const [User6, setUser6] = useState('');
const [User7, setUser7] = useState('');
const [User8, setUser8] = useState('');
const [User9, setUser9] = useState('');
 //https://codeforces.com/api/user.status?handle=alok10 user status api
  
  const getValue = (e, val) => {
    setUsercount(val);
  };
  const handlesubmit = ()=>{
    setSub(!Sub);
    console.log(Sub);
  }
  const handlechange1 = (event) => {
    setUser1(event.target.value);
    console.log(User1);
  };
  useEffect(() => {
    const url = `https://codeforces.com/api/user.status?handle=${User1}`;
    if(User1.length>1){
         axios.get(url).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 1 is Incorrect');
         })
    }
    const url2 = `https://codeforces.com/api/user.status?handle=${User2}`;
    if(User2.length>1){
         axios.get(url2).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 2 is Incorrect');
         })
    }
    const url3 = `https://codeforces.com/api/user.status?handle=${User3}`;
    if(User3.length>1){
         axios.get(url3).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 3 is Incorrect');
         })
    }
    const url4 = `https://codeforces.com/api/user.status?handle=${User4}`;
    if(User4.length>1){
         axios.get(url4).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 4 is Incorrect');
         })
    }
    const url5 = `https://codeforces.com/api/user.status?handle=${User5}`;
    if(User5.length>1){
         axios.get(url5).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 5 is Incorrect');
         })
    }
    const url6 = `https://codeforces.com/api/user.status?handle=${User6}`;
    if(User6.length>1){
         axios.get(url6).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 6 is Incorrect');
         })
    }
    const url7 = `https://codeforces.com/api/user.status?handle=${User7}`;
    if(User7.length>1){
         axios.get(url7).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 7 is Incorrect');
         })
    }
    const url8 = `https://codeforces.com/api/user.status?handle=${User8}`;
    if(User8.length>1){
         axios.get(url8).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 8 is Incorrect');
         })
    }
    const url9 = `https://codeforces.com/api/user.status?handle=${User9}`;
    if(User9.length>1){
         axios.get(url9).then((res)=>{
           console.log(res.status);
         }).catch(error => {
           alert('UserID 9 is Incorrect');
         })
    }
  }, [Sub]);
  
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
    <div className="Userid">
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
        {(Usercount>=1 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User1" variant="filled" onChange={handlechange1} /> }
        {(Usercount>=4 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User2" variant="filled" onChange={handlechange2}/>}
        {(Usercount>=3 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User3" variant="filled" onChange={handlechange3}/>}
        {(Usercount>=2 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User4" variant="filled" onChange={handlechange4}/>}
        {(Usercount>=5 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User5" variant="filled" onChange={handlechange5}/>}
        {(Usercount>=6 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User6" variant="filled" onChange={handlechange6}/>}
        {(Usercount>=7 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User7" variant="filled" onChange={handlechange7}/>}
        {(Usercount>=8 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User8" variant="filled" onChange={handlechange8}/>}
        {(Usercount>=9 )&& <TextField id="outlined-basic" color={"secondary"} className="inputcont" label="User9" variant="filled" onChange={handlechange9}/>}
      </div>
      <button onClick={handlesubmit}>Submit</button>
      </div>
      
    </>
  );
};

export default Userid;
