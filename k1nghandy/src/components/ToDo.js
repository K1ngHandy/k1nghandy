import React from "react";
import AxiosButton from "../hooks/AxiosButton";
// import HomeButton from "../hooks/HomeButton";
import TableButton from "../hooks/TableButton";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className='Container'>
                <header className='Header2'>
                    <h3>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                id="new-todo"
                                onChange={this.handleChange}
                                value={this.state.text}
                                placeholder='What to do?'
                                className='Input'
                            />
                        </form>
                    </h3>
                </header>
                <article className='Main2'>
                    <TodoList className='Table' items={this.state.items} />
                </article>
                <aside className='Aside2 Aside-3'><TableButton /></aside>
                <aside className='Aside2 Aside-4'><AxiosButton /></aside>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className='Container'>
                <ul className='Table'>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;
