import React from "react";

class ToDoApp extends React.Component {
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
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="new-todo">
                            What needs to be done?
                        </label>
                        <input
                            id="new-todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <button className='Button'>
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </header>
                <article className='Main2'>
                    <ToDoList items={this.state.items} />
                </article>
                <aside className='Aside2 Aside-3'></aside>
                <aside className='Aside2 Aside-4'></aside>
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

class ToDoList extends React.Component {
    render() {
        return (
            <ul className='Table'><h3>List</h3>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default ToDoApp;
