import TaskItem from "./TaskItem"

function TaskList({activeTasks}) {
    return (
        <ul className="task-list">
            {activeTasks.map((task) =>(<TaskItem task={task} key={task.id}/>))}
            
        </ul>
    )
}

export default TaskList