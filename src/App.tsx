import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {

    const  shapka1 = "What to learn1"
    const shapka11 = "What to learn11"
    const  shapka2 = "What to learn2"
    const shapka22 = "What to learn22"

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    


    return (
        <div className="App">
                <Todolist  newShapka={shapka11} tasks={tasks1}/>
                <Todolist shapka={shapka2} tasks={tasks2}/>
        </div>
    );
}

export default App;
