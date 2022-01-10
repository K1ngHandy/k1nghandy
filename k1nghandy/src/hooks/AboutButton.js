import React from "react";
import { useNavigate } from "react-router-dom";

function AboutButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('./about');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            About
        </button>
    )
}

export default AboutButton;
