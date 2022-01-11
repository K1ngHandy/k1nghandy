import React from "react";
import { useNavigate } from "react-router-dom";

function TableButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('./table');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            Table
        </button>
    )
}

export default TableButton;
