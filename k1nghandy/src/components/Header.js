import React from "react";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to='/'><HomeButton /></Link>
            <Link to='/about' ><AboutButton /></Link>
        </div>
    )
}

export default Header;
