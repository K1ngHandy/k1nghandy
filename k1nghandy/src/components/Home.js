import React from "react";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";

function Home() {
    const logo = 'https://images.pexels.com/photos/48770/business-time-clock-clocks-48770.jpeg?cs=srgb&dl=pexels-pixabay-48770.jpg&fm=jpg://www.pexels.com/photo/london-new-york-tokyo-and-moscow-clocks-48770/';

    return (
        <div>
            <nav>
                <HomeButton />
                <AboutButton />
            </nav>
            <h1>Home</h1>
            <img class='App-logo' src={logo} className='App-logo' alt='logo' />
        </div >

    );
}

export default Home;
