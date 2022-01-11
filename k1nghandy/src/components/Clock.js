import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='Container'>
                <header className='Header2'>
                    <h3 className='Clock'>{this.state.date.toLocaleTimeString()}</h3>
                </header>
                <article className='Main2'></article>
                <aside className='Aside2 Aside-3'>3</aside>
                <aside className='Aside2 Aside-4'>4</aside>
            </div>
        );
    }
}

export default Clock;
