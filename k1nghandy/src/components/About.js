import React from "react";

function About() {
    const img = 'https://picsum.photos/200/300';

    return (
        <div className='about'>
            <h1>About</h1>
            <img className='App-img' src={img} alt='random' />
            <br />
        </div>
    )
}

export default About;
