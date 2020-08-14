import React from "react";
import "./styles.scss"
import ToDoItem from "../../elements/ToDoItem/ToDoItem";
import AddToDoItem from "../../elements/AddToDoItem/AddToDoItem";

const data = ['Какой-то текст', 'Что-то ещё сделать']

class ToDoList extends React.Component {

    state = {
        items: data
    }
    renderItems() {
        return this.state.items.map((item, index) => <ToDoItem key={index} data={item}/>)
    }

    addItem = (text) => {
        this.setState({
            items: [...this.state.items, text]
        })
    }

    render() {
        return (
            <div className={'to-do-list'}>
                {this.renderItems()}
                <AddToDoItem addItem={this.addItem}/>
            </div>
        )
    }

}

export default ToDoList