import React from "react";
import HomeButton from "../hooks/HomeButton";
import TableButton from "../hooks/TableButton";
import { Link } from 'react-router-dom';
import TodoButton from "../hooks/TodoButton";
import WeatherButton from "../hooks/WeatherButton";

function Header() {
    return (
        <div className="Header">
            <Link to='/'><HomeButton /></Link>
            <Link to='/table'><TableButton /></Link>
            <Link to='/todo'><TodoButton /></Link>
            <Link to='/weather'><WeatherButton /></Link>
        </div>
    )
}

export default Header;
