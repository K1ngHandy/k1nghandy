import React from "react";
import HomeButton from "../hooks/HomeButton";
import AboutButton from "../hooks/AboutButton";

function Home() {

    return (
        <div>
            <ul>
                <li>
                    <HomeButton />
                </li>
                <li>
                    <AboutButton />
                </li>
            </ul>
        </div>

    );
}

export default Home;
