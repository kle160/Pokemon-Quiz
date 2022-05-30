import React from 'react';
import './main.css';
import title from '../Assets/pokemonLogo.png';

const Main = () => {
    return (
        <div className="container-fluid bg-container">
            <h1><img src={title} alt="title logo" width="300" height="100"/></h1>
            <h2>Hello there and welcome to the Pokemon Quiz Game! Please enter your name below to get started</h2>
            <button onClick={''}>Enter</button>
        </div>
    )
}

export default Main;