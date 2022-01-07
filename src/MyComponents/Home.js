import React from 'react';
import Button from "../MyComponents/Buttons/Button";

const Home = () => {
    return (
        <>
            <div className="content" >
                <Button title={"Home"} type={1}/>
                <Button title={"Home"} type={2}/>
            </div>
        </>
    )
}

export default Home
