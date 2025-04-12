import TaskForm from "./components/Main/TaskForm";
import TaskList from "./components/Main/ComplitedTask";
import ComplitedTask from "./components/Main/ComplitedTask";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openSection, setOpensection] = useState({
    taskList: false,
    tasks: true,
    complitedTask: true,
  });

  function toogleSection(section) {
    setOpensection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  function addTask(task) {
    setTasks([...tasks, { ...task, completed: false, id: Date.now() }]);
  }

  return (
    <div className="app">
      <Header />
      <div className="task-container">
        <h1>Task List</h1>
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toogleSection("taskList")}
        >
          +
        </button>
        {openSection.taskList && <TaskForm  addTask={addTask}/>}
      </div>
      <div className="completed-task-container">
        <h2>Task`s</h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toogleSection("tasks")}
        >
          +
        </button>
        <div className="sort-controls">
          <button className="sort-button">By date</button>
          <button className="sort-button">By priority</button>
        </div>
        {openSection.tasks && <TaskList />}
      </div>
      <div className="task-container">
        <h2>Completed Task`s</h2>
        <button
          className={`close-button ${openSection.complitedTask ? "open" : ""}`}
          onClick={() => toogleSection("complitedTask")}
        >
          +
        </button>
        {openSection.complitedTask && <ComplitedTask />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
