// import React from "react";
import axios from "axios";
import React, { useState } from "react";
import HomeButton from "../hooks/HomeButton";
import TodoButton from "../hooks/TodoButton";

function Axios() {
    // const [weather, setWeather] = useState([]);

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=detroit&appid=7591a829f8dd9490249d38acd17954b1')
        .then(res => {
            console.log("1 " + res);
            return res;
        })
        .catch(err => {
            console.log(err);
            return err;
        });

    return (
        <div className='Container'>
            <header className='Header2'>
                <h3 className='Hello'>!</h3>
            </header>
            <article className='Main2'>
                <h3>Well, </h3>
                {/* <p>{weather}</p> */}
            </article>
            <aside className='Aside2 Aside-3'><TodoButton /></aside>
            <aside className='Aside2 Aside-4'><HomeButton /></aside>
        </div>
    )
}


export default Axios;
