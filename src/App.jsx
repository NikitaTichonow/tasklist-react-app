import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List</h1>
        <button className="close-button">+</button>
        <TaskForm />
      </div>
      <div className="completed-task-container">
        <h2>Task`s</h2>
        <button className="close-button">+</button>
        <div className="sort-controls">
          <button className="sort-button">By date</button>
          <button className="sort-button">By priority</button>
        </div>
        <TaskList />
      </div>
      <div className="task-container">
        <h2>Completed Task`s</h2>
        <button className="close-button">+</button>
      </div>
    </div>
  );
}

export default App;
