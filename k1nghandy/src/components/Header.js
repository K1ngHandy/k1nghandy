import React from "react";
import HomeButton from "../hooks/HomeButton";
import TableButton from "../hooks/TableButton";
import { Link } from 'react-router-dom';
import TodoButton from "../hooks/TodoButton";
import AxiosButton from "../hooks/AxiosButton";

function Header() {
    return (
        <div className="Header">
            <Link className='App-link' to='/'><HomeButton /></Link>
            <Link className='App-link' to='/table'><TableButton /></Link>
            <Link className='App-link' to='/todo'><TodoButton /></Link>
            <Link className='App-link' to='/axios'><AxiosButton /></Link>
        </div>
    )
}

export default Header;
