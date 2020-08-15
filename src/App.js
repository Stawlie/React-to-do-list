import React from 'react';
import './App.css';
import Header from "./components/elements/Header/Header";
import ToDoList from "./components/lists/ToDoList/ToDoList";

class App extends React.Component{

    state = {
        status: JSON.parse(localStorage.getItem('to-do-list')) || [
        ],
    }

    clearList = () => {
        localStorage.setItem('to-do-list', JSON.stringify([]))
        window.location.reload(false);
    }

    render() {
        return (
            <div className="App">
                <Header status={this.state.status} clearList={this.clearList}/>
                <ToDoList status={this.state.status}/>
            </div>
        );
    }

}

export default App;
