import React from "react";
import { useNavigate } from "react-router-dom";

function ClockButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/clock');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            Clock
        </button>
    )
}

export default ClockButton;
