import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
    let navigate = useNavigate();

    function handleClick() {
        navigate.push('./home');
    }

    return (
        <button type='button' onClick={handleClick}>
            Home
        </button>
    )
}

export default HomeButton;
