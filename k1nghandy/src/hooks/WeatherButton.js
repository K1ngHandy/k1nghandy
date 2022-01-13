import React from "react";
import { useNavigate } from "react-router-dom";

function WeatherButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/weather');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            Weather
        </button>
    )
}

export default WeatherButton;
