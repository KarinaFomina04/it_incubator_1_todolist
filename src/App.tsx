import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterValuesType = "all" | "completed" | "active";

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "React", isDone: false }
    ]); //in state passed an array initTasks

    let [filter, setFilter] = useState<FilterValuesType>("all");

    //create function removeTasks for to delete lines by id
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(el => el.id !== id) //create new array with help func filtration by id
        setTasks(filteredTasks); //in func setTasks transfer new arrray filteredTasks
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let taskForTodoList = tasks;
    if (filter === "completed") {
        taskForTodoList = tasks.filter(el => el.isDone === true)
    }
    if (filter === "active") {
        taskForTodoList = tasks.filter(el => el.isDone === false)
    }

    return (
        <div className="App">
            <Todolist
                head1={"What to learn"}
                tasks={taskForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter} />
        </div>
    );
}

export default App;
