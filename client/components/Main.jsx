import React from 'react';
import './main.css';
import title from '../Assets/pokemonLogo.png';
import Typewriter from 'typewriter-effect';

const Main = () => {

    return (
        <div className="container-fluid bg-container">
            <h1><img src={title} alt="title logo" width="300" height="100"/></h1>
            <h2>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("Welcome to the Pokemon Quiz!")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Please Enter Your Name Below to Get Started!")
                    .start();
                }}
            />
            </h2>
            <form className='inputForm'>
                <input type="text" required/>
                <span> </span>
                <button onClick={''}>Enter</button>
            </form>
        </div>
    )
}

export default Main;