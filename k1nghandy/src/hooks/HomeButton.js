import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate.push('/');
    }

    return (
        <button type='button' onClick={handleClick}>
            Home
        </button>
    )
}

export default HomeButton;
