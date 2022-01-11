import React from "react";
import HomeButton from "../hooks/HomeButton";
import TableButton from "../hooks/TableButton";
import { Link } from 'react-router-dom';
import ClockButton from "../hooks/ClockButton";

function Header() {
    return (
        <div className="Header">
            <Link className='App-link' to='/'><HomeButton /></Link>
            <Link className='App-link' to='/clock'><ClockButton /></Link>
            <Link className='App-link' to='/table'><TableButton /></Link>
        </div>
    )
}

export default Header;
