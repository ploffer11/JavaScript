import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder="enter task"
                            ref={(a) => this._inputElement = a}
                        >
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                    delete={this.deleteItem} />
            </div>
        );
    }

    addItem(e) {
        let itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });
        }

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        console.log(itemArray);
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter(
            (item) => { return (item.key !== key); }
        );

        this.setState({
            items: filteredItems
        });
    }
}

export default TodoList;