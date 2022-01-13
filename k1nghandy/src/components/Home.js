import React from "react";
import axios from "axios";
import Clock from "./Clock";
import TableButton from "../hooks/TableButton";
import WeatherButton from "../hooks/WeatherButton";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                // console.log('2 ' + res.data);
                this.setState({ imageURL: res.data.message })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { imageURL } = this.state;

        return (
            <div className='Container'>
                <header className='Header2'>
                    <Clock date={new Date()} />
                </header>
                <article className='Main2'>
                    <img className='Main-img' src={imageURL} alt='random dog' />
                </article>
                <aside className='Aside2 Aside-3'><WeatherButton /></aside>
                <aside className='Aside2 Aside-4'><TableButton /></aside>
            </div>
        );
    }
}

export default Home;
