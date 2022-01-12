import React from "react";
import axios from "axios";
import Clock from "./Clock";
import TableButton from "../hooks/TableButton";
import AxiosButton from "../hooks/AxiosButton";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                // console.log(res.data.message);
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
                    <Clock date={new Date()}/>
                </header>
                <article className='Main2'>
                    <img className='Main-img' src={imageURL} alt='random dog' />
                    <br></br>
                </article>
                <aside className='Aside2 Aside-3'><AxiosButton /></aside>
                <aside className='Aside2 Aside-4'><TableButton /></aside>
            </div>
        );
    }
}

export default Home;
