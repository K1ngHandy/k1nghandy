import React from "react";
import Footer from "./Footer";

function About() {
    const img = 'https://picsum.photos/200/300';

    return (
        <div className='Wrapper'>
            <article className='Main'>
                <h1>About</h1>
                <img className='App-img' src={img} alt='random' />
                <h4>Subtitle text</h4>
            </article>
            <aside className='Aside-1'></aside>
            <aside className='Aside-2'></aside>
            <footer className='Footer'>
                <Footer />
            </footer>
        </div>
    )
}

export default About;
