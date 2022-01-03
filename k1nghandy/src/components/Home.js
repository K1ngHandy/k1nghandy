import React, { useState } from "react";
import axios from "axios";

const Home = () => {
    const initialValues = {
        name: '',
        email: ''
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState('');

    // const { push } = useHistory;

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios()
            .get('')
            .then((res) => {
                console.log(res);
                setError('');
            })
            .catch((err) => {
                console.log(err);
                setError('Error');
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
                <br />
                <label>Email: </label>
                <input>
                    id='email'
                    type='text'
                    name='email'
                    onChange={handleChange}
                </input>
                <br />
            </form>
        </div>
    )
}

export default Home;
