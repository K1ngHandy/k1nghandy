import React from "react";
import axios from "axios";

// const img = 'https://picsum.photos/200/300';

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
                    <h3 className='Hello'>Hello..</h3>
                </header>
                <article className='Main2'>
                    {/* <img className='Main-img' src={img} alt='random generated'></img> */}
                    <img className='Main-img' src={imageURL} alt='random dog' />
                    <br></br>
                </article>
                <aside className='Aside2 Aside-3'>3</aside>
                <aside className='Aside2 Aside-4'>4</aside>
            </div>
        );
    }
}

export default Home;
