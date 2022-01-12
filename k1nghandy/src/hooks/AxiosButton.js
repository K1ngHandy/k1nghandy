import React from "react";
import { useNavigate } from "react-router-dom";

function AxiosButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/axios');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            Axios
        </button>
    )
}

export default AxiosButton;
