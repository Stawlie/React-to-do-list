import React from 'react';
import './App.css';
import Header from "./components/elements/Header/Header";
import ToDoList from "./components/lists/ToDoList/ToDoList";

function App() {

  return (
    <div className="App">
        <Header/>
        <ToDoList/>
    </div>
  );
}

export default App;
