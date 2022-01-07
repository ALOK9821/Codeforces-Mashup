import React from 'react'
import "./Header.scss";
import Button from "../Buttons/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
import { render } from '@testing-library/react';

const Header = () => {
    return (
        <>
            <h1> <CodeIcon/>  Codeforces Problems generator</h1>
            <h5>Get Unsolved Problems to generate Mashups/(Virtual contest) on Codeforces </h5> 
        </>
    );
}

export default Header
