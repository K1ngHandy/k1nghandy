import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';

const Home = () => {
    const initialValues = {
        name: '',
        email: ''
    }

    const [formValues, setFormValues] = useState(initialValues);

    // const { push } = useHistory;

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h2>You are home</h2>
            <form>
                <label>Name: </label>
                <input>
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChange}
                </input>
            </form>
        </div>
    )
}

export default Home;
