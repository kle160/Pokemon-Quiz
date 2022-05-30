import React from 'react';
import './main.css';
import title from '../Assets/pokemonLogo.png';

const Main = () => {
    return (
        <div className="container-fluid bg-container">
            <h1><img src={title} alt="title logo" width="300" height="100"/></h1>
            <h2>Welcome to the Pokemon Quiz! <br/> Please Enter Your Name Below to Get Started</h2>
            <br/>
            <form className='inputForm'>
                <input type="text" />
                <span> </span>
                <button onClick={''}>Enter</button>
            </form>
        </div>
    )
}

export default Main;