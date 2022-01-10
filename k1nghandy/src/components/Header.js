import React from "react";
import Home from "./Home";
import About from "./About";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to='/'><HomeButton /></Link>
            <Link to='/about' ><AboutButton /></Link>

            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Header;
