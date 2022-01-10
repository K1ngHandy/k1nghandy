import React from "react";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";

function About() {
    const image = 'https://picsum.photos/200/300';

    return (
        <div>
            <nav>
                <HomeButton />
                <AboutButton />
            </nav>
            <h1>About</h1>
            <img src={image} />
        </div>
    )
}

export default About;
