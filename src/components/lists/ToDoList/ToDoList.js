import React from "react";
import "./styles.scss"
import ToDoItem from "../../elements/ToDoItem/ToDoItem";
import AddToDoItem from "../../elements/AddToDoItem/AddToDoItem";

class ToDoList extends React.Component {

    state = {
        status: this.props.status
    }

    componentDidUpdate() {
        this.addStorage();
    }

    renderItems() {
        return this.state.status.map((item, index) => <ToDoItem key={index} status={item} doneItem={this.doneItem} delItem={this.delItem}/>)
    }

    addItem = (text) => {
        this.setState({
            status: [...this.state.status, {text, done: false}]
        })
    }

    doneItem = (done, text) => {
        const oldStatus = [...this.state.status]
        oldStatus.forEach(item => {
            if (item.text === text) {
                item.done = done;
            }
        })
        this.setState({
            status: oldStatus
        })
    }

    addStorage() {
        localStorage.setItem('to-do-list', JSON.stringify(this.state.status))
    }

    delItem = (elem) => {
        localStorage.setItem('to-do-list', JSON.stringify([...this.state.status].filter(item => item.text !== elem.text)))
        window.location.reload(false);
    }

    render() {
        return (
            <div className={'to-do-list'}>
                {this.renderItems()}
                <AddToDoItem addItem={this.addItem} />
            </div>
        )
    }

}

export default ToDoList