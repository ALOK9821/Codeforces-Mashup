import React from 'react'
import "./Header.scss";
import Button from "../Buttons/Button";

const Header = () => {
    return (
        <>
            <h1>Codeforces Problems generator</h1>
            <h5>Get Unsolved Problems to generate Mashups/(Virtual contest) on Codeforces </h5> 
            <div className="btn">
                <Button type={1} title={"Got it"}/>
            </div>
        </>
    )
}

export default Header
