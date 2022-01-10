import React from "react";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";
import { Link } from 'react-router-dom';
import ClockButton from "../hooks/ClockButton";

function Header() {
    return (
        <div className="Header">
            <Link to='/'><HomeButton /></Link>
            <Link to='/clock' ><ClockButton /></Link>
            <Link to='/about' ><AboutButton /></Link>
        </div>
    )
}

export default Header;
