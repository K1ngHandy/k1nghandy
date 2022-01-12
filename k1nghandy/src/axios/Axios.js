// import React from "react";
import axios from "axios";
import React from "react";
import HomeButton from "../hooks/HomeButton";
import TodoButton from "../hooks/TodoButton";

class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=miami&appid=7591a829f8dd9490249d38acd17954b1')
            .then(res => {
                console.log("1 " + res.list);
                return res.list;
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    render() {
        
        return(
            <div className = 'Container' >
                <header className='Header2'>
                    <h3 className='Hello'>!</h3>
                </header>
                <article className='Main2'>
                    <h3>Well, </h3>
                </article>
                <aside className='Aside2 Aside-3'><TodoButton /></aside>
                <aside className='Aside2 Aside-4'><HomeButton /></aside>
            </div>
        )
    }
    
}

export default Axios;
