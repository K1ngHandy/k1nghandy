import React from "react";

function Home() {
    const img = 'https://picsum.photos/200/300';

    return (
        <div className='home'>
            <h1>Home</h1>
            <img className='App-img' src={img} alt='random' />
            <br />
        </div>
    );
}

export default Home;
