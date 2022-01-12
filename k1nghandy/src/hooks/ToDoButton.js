import React from "react";
import { useNavigate } from "react-router-dom";

function ToDoButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/todo');
    }

    return (
        <button type='button' className='Button' onClick={handleClick}>
            ToDo
        </button>
    )
}

export default ToDoButton;
