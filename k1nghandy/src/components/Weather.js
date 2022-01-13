// import React from "react";
import axios from "axios";
import React from "react";
import HomeButton from "../hooks/HomeButton";
import TodoButton from "../hooks/TodoButton";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('http://www.7timer.info/bin/astro.php?lon=-75.74&lat=39.97&ac=0&unit=metric&output=internal&tzshift=0')
            .then(res => {
                console.log(res.config);
                this.setState({ imageURL: res.config.url })
            })
            .catch(err => {
                console.log(err);
                alert(err);
            });
    }

    render() {
        const { imageURL } = this.state;

        return (
            <div className='Container' >
                <header className='Header2'>
                    <h3 className='Hello'>19320</h3>
                </header>
                <article className='Main2'>
                    <img className='Main-img' src={imageURL} alt='weather' />
                </article>
                <aside className='Aside2 Aside-3'><TodoButton /></aside>
                <aside className='Aside2 Aside-4'><HomeButton /></aside>
            </div>
        )
    }
}

export default Weather;
