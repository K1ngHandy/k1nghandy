import React from "react";
import { useNavigate } from "react-router-dom";

function AboutButton() {
    let navigate = useNavigate();

    function handleClick() {
        navigate.push('./about');
    }

    return (
        <button type='button' onClick={handleClick}>
            About
        </button>
    )
}

export default AboutButton;
