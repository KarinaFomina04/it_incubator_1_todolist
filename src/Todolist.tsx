import React from "react";
type PropsType = {
    shapka?: string
    newShapka?: string
    tasks: Array<TaskType>
}
type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = (props: PropsType) => {
    return (
        <div className="App">
            <div>
                <h3>{props.shapka}</h3>
                <h3>{props.newShapka}</h3>
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el : TaskType)=>{
                        return(
                    <li key={el.id}><input type="checkbox" checked={el.isDone} /> <span>{el.title}</span></li>
                    )
                    })
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>

    )
};