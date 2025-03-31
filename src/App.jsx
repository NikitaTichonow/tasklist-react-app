function App() {
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List</h1>
        <button className="close-button">+</button>
      </div>
      <div className="completed-task-container">
        <h2>Task`s</h2>
        <button className="close-button">+</button>
      </div>
      <div className="task-container">
        <h2>Completed Task`s</h2>
        <button className="close-button">+</button>
      </div>
    </div>
  );
}

export default App;
