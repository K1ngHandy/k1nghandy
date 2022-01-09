import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Link to='Home'>Home</Link>
            <Link to='About'>About</Link>
            <h2>Stay Tuned. . .</h2>
            <button class='button'><Link to='/'>Enter</Link></button>
        </div>
    )
}

export default About;
