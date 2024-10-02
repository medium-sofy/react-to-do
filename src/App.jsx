import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;
