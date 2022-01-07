import React from 'react'
import "./Header.scss"
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';
const Header = () => {
    return (
        <>
            <h1> <CodeIcon/>  Codeforces Problems Generator</h1>
            <h5>Get Unsolved Problems to generate Mashups/(Virtual contest) on Codeforces </h5> 
        </>
    )
}

export default Header
