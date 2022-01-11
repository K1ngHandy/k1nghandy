import React from "react";

const img = 'https://picsum.photos/200/300';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className='Main'>
                <h3>Hello..</h3>
                <img className='App-img' src={img} alt='random generated'></img>
            </div>
        );
    }
}

export default Home;
