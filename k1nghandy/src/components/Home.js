import React from "react";

const img = 'https://picsum.photos/200/300';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className='Container'>
                <header className='Header2'>
                    <h3>Hello..</h3>
                </header>
                <article className='Main2'>
                    <img className='Main-img' src={img} alt='random generated'></img>
                    <br></br>
                </article>
                <aside className='Aside2 Aside-3'>3</aside>
                <aside className='Aside2 Aside-4'>4</aside>
            </div>
        );
    }
}

export default Home;
