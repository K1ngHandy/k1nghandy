import React from "react";
import { useNavigate } from "react-router-dom";

function TodoButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/todo');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            Todo
        </button>
    )
}

export default TodoButton;
